#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const APIFY_ENDPOINT = "https://nexgendata--news-mcp-server.apify.actor/mcp";
const APIFY_TOKEN = process.env.APIFY_TOKEN || "";

async function callApifyTool(toolName: string, args: Record<string, unknown>): Promise<string> {
  const url = new URL(APIFY_ENDPOINT);
  if (APIFY_TOKEN) {
    url.searchParams.set("token", APIFY_TOKEN);
  }

  const body = {
    jsonrpc: "2.0",
    id: 1,
    method: "tools/call",
    params: {
      name: toolName,
      arguments: args
    }
  };

  const response = await fetch(url.toString(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Apify API error (${response.status}): ${errorText}`);
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(`Tool error: ${JSON.stringify(data.error)}`);
  }

  // Extract text content from MCP response
  const result = data.result;
  if (result?.content && Array.isArray(result.content)) {
    return result.content
      .filter((c: { type: string }) => c.type === "text")
      .map((c: { text: string }) => c.text)
      .join("\n");
  }

  return JSON.stringify(data.result, null, 2);
}

const server = new McpServer({
  name: "news-mcp-server",
  version: "1.0.0"
});

server.registerTool(
  "get_ap_news",
  {
    title: "Get Ap News",
    description: "Get latest AP News articles",
    inputSchema: {
      maxItems: z.number().default(10).describe('Maximum articles')
    },
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      openWorldHint: true
    }
  },
  async (args) => {
    try {
      const result = await callApifyTool("get_ap_news", args);
      return {
        content: [{ type: "text", text: result }]
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return {
        content: [{ type: "text", text: `Error: ${message}` }],
        isError: true
      };
    }
  }
);

server.registerTool(
  "get_bbc_news",
  {
    title: "Get Bbc News",
    description: "Get latest BBC News articles",
    inputSchema: {
      maxItems: z.number().default(10).describe('Maximum articles')
    },
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      openWorldHint: true
    }
  },
  async (args) => {
    try {
      const result = await callApifyTool("get_bbc_news", args);
      return {
        content: [{ type: "text", text: result }]
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return {
        content: [{ type: "text", text: `Error: ${message}` }],
        isError: true
      };
    }
  }
);

server.registerTool(
  "get_npr_news",
  {
    title: "Get Npr News",
    description: "Get latest NPR articles",
    inputSchema: {
      maxItems: z.number().default(10).describe('Maximum articles')
    },
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      openWorldHint: true
    }
  },
  async (args) => {
    try {
      const result = await callApifyTool("get_npr_news", args);
      return {
        content: [{ type: "text", text: result }]
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return {
        content: [{ type: "text", text: `Error: ${message}` }],
        isError: true
      };
    }
  }
);

server.registerTool(
  "get_hacker_news",
  {
    title: "Get Hacker News",
    description: "Get top Hacker News stories",
    inputSchema: {
      maxItems: z.number().default(10).describe('Maximum stories')
    },
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      openWorldHint: true
    }
  },
  async (args) => {
    try {
      const result = await callApifyTool("get_hacker_news", args);
      return {
        content: [{ type: "text", text: result }]
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return {
        content: [{ type: "text", text: `Error: ${message}` }],
        isError: true
      };
    }
  }
);

server.registerTool(
  "search_google_news",
  {
    title: "Search Google News",
    description: "Search Google News",
    inputSchema: {
      query: z.string().describe('News search query'),
      maxItems: z.number().default(10).describe('Maximum results')
    },
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      openWorldHint: true
    }
  },
  async (args) => {
    try {
      const result = await callApifyTool("search_google_news", args);
      return {
        content: [{ type: "text", text: result }]
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return {
        content: [{ type: "text", text: `Error: ${message}` }],
        isError: true
      };
    }
  }
);


// Export for Smithery sandbox scanning
export function createSandboxServer() {
  return server;
}

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("News Aggregation MCP Server running on stdio");
}

// Only run when executed directly, not when imported by Smithery scanner
if (process.argv[1]?.includes('index')) {
  main().catch(console.error);
}
