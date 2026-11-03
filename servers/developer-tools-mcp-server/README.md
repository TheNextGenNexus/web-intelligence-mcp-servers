# Developer Tools MCP Server

Access GitHub repos, npm/PyPI packages, Stack Overflow, arXiv, and Google Scholar — powered by [nexgendata](https://apify.com/nexgendata?fpr=2ayu9b) on Apify.

## Quick Start

### Using npx (recommended)

```bash
npx @nexgendata/developer-tools-mcp-server
```

### Install globally

```bash
npm install -g @nexgendata/developer-tools-mcp-server
```

## Configure with Claude Desktop

Add to your Claude Desktop config (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS):

```json
{
      "mcpServers": {
            "developer-tools-mcp-server": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@nexgendata/developer-tools-mcp-server"
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
| `get_github_repo` | Get detailed information about a GitHub repository |
| `search_github` | Search GitHub repositories by keyword |
| `get_npm_package` | Get npm package details and stats |
| `get_pypi_package` | Get PyPI package details and stats |
| `search_stackoverflow` | Search Stack Overflow questions |
| `search_arxiv_papers` | Search arXiv for research papers |
| `search_scholar` | Search Google Scholar for academic papers |


## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `APIFY_TOKEN` | No | Your Apify API token for authenticated access. Without it, the server uses the public endpoint (rate-limited). |

## How It Works

This MCP server acts as a local stdio bridge to the [nexgendata Apify MCP endpoint](https://nexgendata--developer-tools-mcp-server.apify.actor/mcp). When you call a tool, it forwards the request to Apify and returns the results.

## Links

- [Apify Store](https://apify.com/nexgendata/developer-tools-mcp-server?fpr=2ayu9b)
- [GitHub Repository](https://github.com/TheNextGenNexus/web-intelligence-mcp-servers)
- [nexgendata Blog](https://thenextgennexus.com)

## License

MIT
