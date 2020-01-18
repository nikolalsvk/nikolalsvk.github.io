import React from "react";
import Helmet from "react-helmet";

import "../css/styles.css";

export default () => (
  <div>
    <Helmet htmlAttributes={{ lang: "en" }}>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#30261f" />

      <meta
        name="keywords"
        content="Ruby on Rails, React, Elixir, JavaScript, render_async"
      />
      <meta name="author" content="Nikola Đuza" />
      <meta
        name="description"
        content="Personal website of Nikola Đuza, Software Engineer."
      />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Nikola Đuza" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@nikolalsvk" />
      <meta name="twitter:creator" content="@nikolalsvk" />
      <meta
        name="twitter:url"
        property="og:url"
        content="http://nikolalsvk.github.io"
      />
      <meta name="twitter:image:width" content="1362" />
      <meta name="twitter:image:height" content="1362" />
      <meta
        name="twitter:image"
        property="og:image"
        content="https://nikolalsvk.github.io/site_preview.png"
      />
      <meta name="twitter:title" property="og:title" content="Nikola Đuza" />
      <meta
        name="twitter:description"
        property="og:description"
        content="Personal website of Nikola Đuza, Software Engineer."
      />

      <title>Nikola &#272;uza</title>
    </Helmet>

    <h1>Hi, I'm Nikola</h1>
    <h2>
      <a href="https://github.com/nikolalsvk">
        <span>
          <em>nikolalsvk</em>
        </span>
        <span>
          <em>nikolalsvk</em>
        </span>
        <span>
          <em>nikolalsvk</em>
        </span>
      </a>
    </h2>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li>
        <a href="mailto:nikolaseap@gmail.com" role="button">
          <span role="img" aria-label="wave">
            👋
          </span>
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <span>Software Engineer at </span>
        <a href="https://www.toptal.com/resume/nikola-duza#utilize-just-top-notch-software-coders">
          Toptal
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <span>Organizer at </span>
        <a href="https://novisadjs.org">Novi Sad JS</a>
      </li>
    </ul>
  </div>
);
