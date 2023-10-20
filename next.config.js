const withNextra = require('nextra')({
  output: 'export',
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  "headers": [
    {
      "key": "Cache-Control",
      "value": "s-maxage=1, stale-while-revalidate=59"
    }
  ]
})

module.exports = withNextra()
