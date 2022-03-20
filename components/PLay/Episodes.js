import React from 'react';
import { ChakraProvider, Box, Text } from '@chakra-ui/react';
import './Play.css';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category: 'desert',
    rating: 4,
    time: '40m',
    episode: 2,
  },
];

const listItems = DATA.map((item) => (
  <Box
    display="flex"
    alignItems="center"
    bgGradient="linear(to right, #1c1818,#000000)"
    mt={1}
  >
    <Text
      color="#ffffff"
      fontWeight="bold"
      textAlign="left"
      fontSize="2xl"
      pr={5}
    >
      1.Episode
    </Text>
    <Box
      backgroundColor="red.500"
      width={20}
      p={5}
      mr={0}
      bgGradient="linear(to right, red.500,#652121)"
    />

    <Text color="#000000" fontWeight="bold">
      filler
    </Text>
  </Box>
));

const Episode = () => (
  <ChakraProvider resetCSS>
    <Box backgroundColor="#2f1919">
      <Text
        backgroundColor="whiteAlpha.50"
        color="red.500"
        fontWeight="bold"
        fontSize="xl"
        p={3}
      >
        I Episodes
      </Text>
      <Box backgroundColor="blackAlpha.500" p={22}>
        <div className="jj">{listItems}</div>
      </Box>
    </Box>
  </ChakraProvider>
);

export default Episode;
