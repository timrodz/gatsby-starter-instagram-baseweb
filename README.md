<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Instagram & Base Web Gatsby Starter
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/7ab85d3c-47b7-45e1-91ff-497a211ba390/deploy-status)](https://app.netlify.com/sites/gatsby-starter-instagram-baseweb/deploys)

A portfolio based on your latest Instagram posts, implemented with Uber's [Base Web](https://eng.uber.com/introducing-base-web/) design system. It features out-of-the-box responsive layouts, easy-to-implement components and CSS-in-JS styling.

Check the Gatsby Starter [here](https://www.gatsbyjs.org/starters/timrodz/gatsby-starter-instagram-baseweb/).

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/timrodz/gatsby-starter-instagram-baseweb)

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/timrodz/gatsby-starter-instagram-baseweb)

<img alt="Desktop/Tablet/Phone View" src="https://i.imgur.com/mAi2AXB.jpg" width="1000" />
<img alt="Desktop View" src="https://dev-to-uploads.s3.amazonaws.com/i/quxifu4n3h9qistw2tr9.jpg" width="1000" />

## 🎢 Features

- Plug & Play configuration — All you need is an Instagram username!
- Lightweight & Minimalist page structure. Let your work show itself.
- Fully responsive design: Mobile, Tablet & Desktop supported.
- Continuous deployment via [Netlify](https://www.netlify.com/) or [Zeit](https://zeit.co/).
- Functional components so you can take advantage of [React Hooks](https://www.netlify.com/).
- [Google Analytics](https://analytics.google.com/analytics/web/) ready!

### Libraries & Plugins

-   **Styling**: [Baseweb](https://baseweb.design/).
-   **Linting**: [ESLint](https://eslint.org/).
-   **Gatsby Plugins**:
    -   [Instagram](https://www.gatsbyjs.org/packages/gatsby-source-instagram/).
    -   [Styletron](gatsby-plugin-styletron).

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start/) to create a new site, specifying this starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/timrodz/gatsby-starter-instagram-baseweb
    ```
    
    **Note**: You can change `my-default-starter` to whatever name you prefer.

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

### Required setup

In order to start showing posts from the instagram profile of your choice, you must do the following steps:

#### `data/config.js`

This is the main configuration file for your app. It's in charge of specifying the settings of `gatsby-config.js` (See in section below) as well as the **SEO** of your website.

- **social.instagram**: tells the Instagram API the username to get posts from. If the url is `https://www.instagram.com/natgeotravel/`, the username will be `natgeotravel`.
- **googleAnalyticsId**: If you don't know how to find your id, please see [this post](https://support.google.com/analytics/answer/1008080?hl=en).

**Note**: If you change certain variables, you might have to restart your app by interrupting the process and re-running `gatsby develop`.

```js
module.exports = {
  // Name of your site. Can be the name of a brand, or your personal name.
  title: 'Gatsby Starter',
  // What's the purpose of this website? What can we expect from it?
  description:
    `A portfolio based on your latest Instagram posts, implemented with Uber's Base Web Design System.`,
  // Your legal name.
  legalName: 'Gatsby Starter',
  // URL to this website. If you bought `www.domain.com`, then it will be `www.domain.com`.
  url: 'https://www.robonomy.com',
  // Favicon that will display on browsers.
  logo: 'static/images/favicon.png',
  // Who made this website?
  author: 'Juan Alejandro Morais',
  // What's the website of the author?
  authorUrl: 'https://www.timrodz.com',
  // Your social media presence, in the form of usernames.
  social: {
    // tells the Instagram API the username to get posts from. 
    // If the url is `https://www.instagram.com/natgeotravel`, your username is `natgeotravel`.
    instagram: 'natgeotravel', 
    // Optional
    twitter: '@NatGeoTravel',
  },
  socialLinks: {
    // Complete URL verison of `social.instagram`.
    instagram: 'https://www.instagram.com/natgeotravel',
    // Optional
    twitter: 'https://twitter.com/NatGeoTravel',
  },
  // If applicable, your Google Analytics crawl ID.
  googleAnalyticsId: 'UA-XXXXXXXX-X',
  // Colours that represent your website.
  themeColor: '#000',
  backgroundColor: '#fff',
  // No more information than City + Country due to privacy concerns.
  address: {
    city: 'City',
    country: 'Country',
  },
  // Basic contact details.
  contact: {
    // Email address to contact you.
    email: 'timrodz@icloud.com',
  },
  // When was this website created?
  foundingDate: '2020',
};
```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    │   ├── components
    |   │   ├── common
    |   │   └── theme
    │   └── pages
    ├── data
    │   └── config
    ├── static
    │   └── images
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── .eslintrc.js
    ├── gatsby-config.js
    ├── LICENSE
    ├── package.json
    ├── yarn.lock
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`/data`**: This folder will contain all of the code related to website data structures. `config.js` contains your personal information, and it will be populated for SEO.

4.  **`/static`**: This directory will contain all assets i.e. images. Read how to [use the static folder](https://www.gatsbyjs.org/docs/static-folder/) for more information.

5.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

6.  **`.prettierignore`**: Tells our `.prettierrc` file to ignore certain folders and/or files.

7.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

8.  **`.eslintrc.js`**: This is a configuration file for [ESLint](https://eslint.org/docs/user-guide/configuring). ESLint is a tool to help lint and enforce rules on your code.

9.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

10. **`LICENSE`**: Gatsby, and this starter, are licensed under the MIT license.

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`yarn.lock`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

13. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
