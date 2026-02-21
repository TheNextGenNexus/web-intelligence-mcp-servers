# News Aggregation MCP Server

Get latest news from AP, BBC, NPR, Hacker News, and Google News — powered by [nexgendata](https://apify.com/nexgendata) on Apify.

## Quick Start

### Using npx (recommended)

```bash
npx @nexgendata/news-mcp-server
```

### Install globally

```bash
npm install -g @nexgendata/news-mcp-server
```

## Configure with Claude Desktop

Add to your Claude Desktop config (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS):

```json
{
      "mcpServers": {
            "news-mcp-server": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@nexgendata/news-mcp-server"
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
| `get_ap_news` | Get latest articles from Associated Press |
| `get_bbc_news` | Get latest articles from BBC News |
| `get_npr_news` | Get latest articles from NPR |
| `get_hacker_news` | Get top stories from Hacker News |
| `search_google_news` | Search Google News for a topic |


## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `APIFY_TOKEN` | No | Your Apify API token for authenticated access. Without it, the server uses the public endpoint (rate-limited). |

## How It Works

This MCP server acts as a local stdio bridge to the [nexgendata Apify MCP endpoint](https://nexgendata--news-mcp-server.apify.actor/mcp). When you call a tool, it forwards the request to Apify and returns the results.

## Links

- [Apify Store](https://apify.com/nexgendata/news-mcp-server)
- [GitHub Repository](https://github.com/TheNextGenNexus/web-intelligence-mcp-servers)
- [nexgendata Blog](https://thenextgennexus.com)

## License

MIT
