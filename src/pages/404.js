import { Block } from 'baseui/block';
import { Display1, Paragraph1 } from 'baseui/typography';
import * as React from 'react';
import Layout from 'components/layout';
import SEO from 'components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Block>
      <Display1 align="center">NOT FOUND</Display1>
      <Paragraph1 align="center">This page doesn&#39;t exist.</Paragraph1>
    </Block>
  </Layout>
);

export default NotFoundPage;
