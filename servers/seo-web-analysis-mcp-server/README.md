# SEO & Web Analysis MCP Server

Run Lighthouse audits, check SSL certificates, detect tech stacks, query WHOIS and DNS records — powered by [nexgendata](https://apify.com/nexgendata?fpr=2ayu9b) on Apify.

## Quick Start

### Using npx (recommended)

```bash
npx @nexgendata/seo-web-analysis-mcp-server
```

### Install globally

```bash
npm install -g @nexgendata/seo-web-analysis-mcp-server
```

## Configure with Claude Desktop

Add to your Claude Desktop config (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS):

```json
{
      "mcpServers": {
            "seo-web-analysis-mcp-server": {
                  "command": "npx",
                  "args": [
                        "-y",
                        "@nexgendata/seo-web-analysis-mcp-server"
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
| `run_lighthouse_audit` | Run a Google Lighthouse performance audit on a URL |
| `get_pagespeed_insights` | Get Google PageSpeed Insights for a URL |
| `check_ssl_certificate` | Check SSL certificate details for a domain |
| `identify_tech_stack` | Identify the technology stack of a website |
| `query_whois` | Query WHOIS records for a domain |
| `query_dns_records` | Query DNS records for a domain |


## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `APIFY_TOKEN` | No | Your Apify API token for authenticated access. Without it, the server uses the public endpoint (rate-limited). |

## How It Works

This MCP server acts as a local stdio bridge to the [nexgendata Apify MCP endpoint](https://nexgendata--seo-web-analysis-mcp-server.apify.actor/mcp). When you call a tool, it forwards the request to Apify and returns the results.

## Links

- [Apify Store](https://apify.com/nexgendata/seo-web-analysis-mcp-server?fpr=2ayu9b)
- [GitHub Repository](https://github.com/TheNextGenNexus/web-intelligence-mcp-servers)
- [nexgendata Blog](https://thenextgennexus.com)

## License

MIT
