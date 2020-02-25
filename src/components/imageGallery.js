import { styled } from 'baseui';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';

const Image = styled(Img, {
  objectFit: 'cover',
  objectPosition: '100% 0',
  width: '100%',
  height: '100%',
  maxHeight: '25rem',
});

const nodeURL = 'https://www.instagram.com/p';

const ImageGallery = () => {
  const {
    allInstaNode: { edges },
  } = useStaticQuery(graphql`
    {
      allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 12) {
        edges {
          node {
            id
            caption
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const renderImages = () => {
    const images = edges.map(({ node }) => {
      const {
        id,
        caption,
        localFile: { childImageSharp },
      } = node;
      return (
        <FlexGridItem key={id} flexGridItemIndex={id}>
          <a href={`${nodeURL}/${id}`}>
            <Image
              loading="lazy"
              alt={caption || ''}
              fluid={childImageSharp.fluid}
            />
          </a>
        </FlexGridItem>
      );
    });

    return images;
  };

  return (
    <FlexGrid
      // Brackets specify the options for different breakpoints
      // 1 column for small devices
      // 2 columns for medium devices
      // 3 columns for large devices
      flexGridColumnCount={[1, 2, 3]}
      flexGridColumnGap={['scale0', 'scale200']}
      flexGridRowGap={['scale0', 'scale200']}
    >
      {renderImages()}
    </FlexGrid>
  );
};

export default ImageGallery;
