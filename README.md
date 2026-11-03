# web-intelligence-mcp-servers

MCP servers for web analysis, SEO, news aggregation, academic research, and developer tools — powered by [nexgendata](https://apify.com/nexgendata?fpr=2ayu9b) on Apify.

## MCP Servers


### [SEO & Web Analysis MCP Server](./servers/seo-web-analysis-mcp-server/)

Run Lighthouse audits, check SSL certificates, detect tech stacks, query WHOIS and DNS records

**Tools:** `run_lighthouse_audit`, `get_pagespeed_insights`, `check_ssl_certificate`, `identify_tech_stack`, `query_whois`, `query_dns_records`

**Install:** `npx @nexgendata/seo-web-analysis-mcp-server`

### [News Aggregation MCP Server](./servers/news-mcp-server/)

Get latest news from AP, BBC, NPR, Hacker News, and Google News

**Tools:** `get_ap_news`, `get_bbc_news`, `get_npr_news`, `get_hacker_news`, `search_google_news`

**Install:** `npx @nexgendata/news-mcp-server`

### [Academic Research MCP Server](./servers/academic-research-mcp-server/)

Search arXiv, Google Scholar, and Wikipedia for academic papers and knowledge

**Tools:** `search_arxiv`, `search_google_scholar`, `search_wikipedia`, `get_paper_metadata`, `get_citation_metrics`

**Install:** `npx @nexgendata/academic-research-mcp-server`

### [Developer Tools MCP Server](./servers/developer-tools-mcp-server/)

Access GitHub repos, npm/PyPI packages, Stack Overflow, arXiv, and Google Scholar

**Tools:** `get_github_repo`, `search_github`, `get_npm_package`, `get_pypi_package`, `search_stackoverflow`, `search_arxiv_papers`, `search_scholar`

**Install:** `npx @nexgendata/developer-tools-mcp-server`


## Quick Start

Each server can be installed independently:

```bash
# Pick the server you need
npx @nexgendata/<server-name>
```

Then add it to your Claude Desktop or Cline configuration.

## About nexgendata

nexgendata provides 64 data tools on the [Apify platform](https://apify.com/nexgendata?fpr=2ayu9b), including 15 MCP servers for AI agent integration. Our tools cover social media, business data, web intelligence, finance, e-commerce, and more.

- **Blog:** [thenextgennexus.com](https://thenextgennexus.com)
- **Apify Store:** [apify.com/nexgendata](https://apify.com/nexgendata?fpr=2ayu9b)
- **RapidAPI:** [rapidapi.com/rubymoonshot](https://rapidapi.com/user/rubymoonshot)

## License

MIT
