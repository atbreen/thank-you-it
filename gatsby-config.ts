import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: "/thank-you-it",
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-top-layout`,
    `gatsby-plugin-material-ui`,
  ],
};

export default config;
