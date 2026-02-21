#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const APIFY_ENDPOINT = "https://nexgendata--developer-tools-mcp-server.apify.actor/mcp";
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
  name: "developer-tools-mcp-server",
  version: "1.0.0"
});

server.registerTool(
  "get_github_repo",
  {
    title: "Get Github Repo",
    description: "Get GitHub repository details",
    inputSchema: {
      repoUrl: z.string().describe('GitHub repository URL')
    },
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      openWorldHint: true
    }
  },
  async (args) => {
    try {
      const result = await callApifyTool("get_github_repo", args);
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
  "search_github",
  {
    title: "Search Github",
    description: "Search GitHub repositories",
    inputSchema: {
      query: z.string().describe('Search query'),
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
      const result = await callApifyTool("search_github", args);
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
  "get_npm_package",
  {
    title: "Get Npm Package",
    description: "Get npm package details",
    inputSchema: {
      packageName: z.string().describe('npm package name')
    },
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      openWorldHint: true
    }
  },
  async (args) => {
    try {
      const result = await callApifyTool("get_npm_package", args);
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
  "get_pypi_package",
  {
    title: "Get Pypi Package",
    description: "Get PyPI package details",
    inputSchema: {
      packageName: z.string().describe('PyPI package name')
    },
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      openWorldHint: true
    }
  },
  async (args) => {
    try {
      const result = await callApifyTool("get_pypi_package", args);
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
  "search_stackoverflow",
  {
    title: "Search Stackoverflow",
    description: "Search Stack Overflow",
    inputSchema: {
      query: z.string().describe('Search query'),
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
      const result = await callApifyTool("search_stackoverflow", args);
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
  "search_arxiv_papers",
  {
    title: "Search Arxiv Papers",
    description: "Search arXiv papers",
    inputSchema: {
      query: z.string().describe('Search query'),
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
      const result = await callApifyTool("search_arxiv_papers", args);
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
  "search_scholar",
  {
    title: "Search Scholar",
    description: "Search Google Scholar",
    inputSchema: {
      query: z.string().describe('Search query'),
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
      const result = await callApifyTool("search_scholar", args);
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


async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Developer Tools MCP Server running on stdio");
}

main().catch(console.error);
