import { Block } from 'baseui/block';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import * as React from 'react';
import Footer from './footer';
import Header from './header';
import 'theme/layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Block>
        <main>{children}</main>
      </Block>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
