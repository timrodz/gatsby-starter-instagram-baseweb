/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import Thumbnail from 'static/images/thumbnail.png';
import {
  address,
  contact,
  foundingDate,
  legalName,
  logo,
  socialLinks,
  url,
} from 'data/config';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import * as React from 'react';
import Helmet from 'react-helmet';

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const structuredDataOrganization = `{
  	"@context": "http://schema.org",
  	"@type": "Organization",
  	"legalName": "${legalName}",
  	"url": "${url}",
  	"logo": "${logo}",
  	"foundingDate": "${foundingDate}",
  	"founders": [{
  		"@type": "Person",
  		"name": "${legalName}"
  	}],
  	"contactPoint": [{
  		"@type": "ContactPoint",
  		"email": "${contact.email}",
  		"contactType": "customer service"
  	}],
  	"address": {
  		"@type": "PostalAddress",
  		"addressLocality": "${address.city}",
  		"addressCountry": "${address.country}"
  	},
    "sameAs": [
  		"${socialLinks.instagram}",
      "${socialLinks.twitter}",
  	]
  	}`;

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: Thumbnail,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">{structuredDataOrganization}</script>
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
