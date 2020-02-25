import { StyledBody } from 'baseui/card';
import ImageGallery from 'components/imageGallery';
import * as React from 'react';
import Layout from './layout';
import SEO from './seo';

const App = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <StyledBody>
        <ImageGallery />
      </StyledBody>
    </Layout>
  );
};

export default App;
