module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-111191498-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nikola Đuza`,
        short_name: `nikolalsvk`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/favicon.gif` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`
  ]
};
