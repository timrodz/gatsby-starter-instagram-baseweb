import Link from 'common/link';
import * as React from 'react';

const SocialLink = props => {
  return <Link {...props} target="_blank" rel="noopener noreferrer" />;
};

export default SocialLink;
