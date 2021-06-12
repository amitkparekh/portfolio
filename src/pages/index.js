import React from "react"

import { styled } from 'gatsby-theme-stitches/src/stitches.config';

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',

  variants: {
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
    },
  },
});

export default function Home() {
  return (
    <Text as="h1" size="1">
      Hello, from Stitches.
    </Text>
  );
}
