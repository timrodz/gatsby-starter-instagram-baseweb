const config = require('./data/config');

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    author: config.author,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: `starter`,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `minimal-ui`,
        icon: config.logo, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        // type: `user-profile`,
        username: config.social.instagram,
      },
    },
    // Optional: Google Analytics Tracking
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: config.googleAnalyticsId,
    //     head: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-styletron`,
      options: {
        // You can pass options to Styletron.
        // Prefix all generated classNames:
        prefix: `_`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          components: `${__dirname}/src/components`,
          common: `${__dirname}/src/components/common/`,
          static: `${__dirname}/static/`,
          theme: `${__dirname}/src/components/theme`,
          data: `${__dirname}/data/`,
        },
      },
    },
  ],
};
