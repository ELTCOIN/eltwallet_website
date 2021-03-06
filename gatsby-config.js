module.exports = {
  siteMetadata: {
    title: 'Eltwallet',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-remove-serviceworker`,
      options: {
        filename: 'service-worker.js',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-107700473-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: 'white',
        display: 'minimal-ui',
        icon: 'src/favicon.png',
        name: 'Eltwallet',
        short_name: 'Eltwallet',
        start_url: '/',
        theme_color: '#4d00ff',
      },
    },
    'gatsby-plugin-offline',
  ],
};
