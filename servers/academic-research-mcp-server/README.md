# Academic Research MCP Server

Search arXiv, Google Scholar, and Wikipedia for academic papers and knowledge — powered by [nexgendata](https://apify.com/nexgendata?fpr=2ayu9b) on Apify.

## Quick Start

### Using npx (recommended)

```bash
npx @nexgendata/academic-research-mcp-server
```

### Install globally

```bash
npm install -g @nexgendata/academic-research-mcp-server
```

## Configure with Claude Desktop

Add to your Claude Desktop config (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS):

```json
{
      "mcpServers": {
            "academic-research-mcp-server": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@nexgendata/academic-research-mcp-server"
                  ],
                  "env": {
                        "APIFY_TOKEN": "your-apify-token-optional"
                  }
            }
      }
}
```

## Configure with Cline

Add the same configuration to your Cline MCP settings.

## Available Tools

| Tool | Description |
|------|-------------|
| `search_arxiv` | Search arXiv for academic papers |
| `search_google_scholar` | Search Google Scholar for academic papers |
| `search_wikipedia` | Search Wikipedia for articles |
| `get_paper_metadata` | Get detailed metadata for an academic paper |
| `get_citation_metrics` | Get citation metrics for a paper or author |


## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `APIFY_TOKEN` | No | Your Apify API token for authenticated access. Without it, the server uses the public endpoint (rate-limited). |

## How It Works

This MCP server acts as a local stdio bridge to the [nexgendata Apify MCP endpoint](https://nexgendata--academic-research-mcp-server.apify.actor/mcp). When you call a tool, it forwards the request to Apify and returns the results.

## Links

- [Apify Store](https://apify.com/nexgendata/academic-research-mcp-server?fpr=2ayu9b)
- [GitHub Repository](https://github.com/TheNextGenNexus/web-intelligence-mcp-servers)
- [nexgendata Blog](https://thenextgennexus.com)

## License

MIT
