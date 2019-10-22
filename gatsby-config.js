module.exports = {
  siteMetadata: {
    title: `Loading .graphql and .gql files with Gatsby`,
    description: `Example site demonstrating how to use gatsby-plugin-graphql-loader`,
    author: `@nwrichmond`,
    githubURL: `https://github.com/NWRichmond/gatsby-plugin-graphql-loader-demo`,
  },
  plugins: [
    `gatsby-plugin-graphql-loader`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
