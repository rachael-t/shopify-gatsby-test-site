module.exports = {
  siteMetadata: {
    title: `Shopify Gatsby Test Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-shopify',
    options: {
      "shopName": "",
      "accessToken": ""
    }
  }]
};