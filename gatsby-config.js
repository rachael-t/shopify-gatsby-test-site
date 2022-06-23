require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Shopify Gatsby Test Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-shopify',
    options: {
      "storeUrl": process.env.GATSBY_SHOPIFY_STORE_URL,
      "password": process.env.SHOPIFY_SHOP_PASSWORD
    }
  }]
};