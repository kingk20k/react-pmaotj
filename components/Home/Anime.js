import React, { useState ,useRef} from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/dist/plyr.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ChakraProvider, Box, Grid } from '@chakra-ui/react';
import './Anime.css';
import HorizontalScroll from 'react-scroll-horizontal';
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

export default function Anime() {
  
 
const x = useRef(null)
const listItems = DATA.map((item) => (
    <div className="hi2" id="1" ref={x}>
      
      <Box
        backgroundColor="#000000"
        width={40}
        height={225}
        borderRadius={10}
        display="grid"
        flexDirection="column"
        p={1}
        m={4}
        mt={1}
        className="hi3"
      >
        <Link to="/play" className="" id="po">About</Link>
        <Box
          backgroundColor="#524343"
          height={160}
          overflow="visible"
          display="grid"
        />
        <Box backgroundColor="#5e5353" borderRadius={9}></Box>
      </Box>
    </div>
  ));
  console.log(x)

  return (
    <>
      <button className="po">dfdfdfdf</button>
      <div style={{ backgroundColor: 'black' }}>
        <ChakraProvider>
          <Box
            backgroundColor="yellow.500"
            bgGradient="linear(to right, #000000,#442222,#000000)"
          >
            <div className="hi">{listItems}</div>
          </Box>
        </ChakraProvider>
        <ChakraProvider>
          <Box
            backgroundColor="yellow.500"
            bgGradient="linear(to right, #000000,#442222,#000000)"
          >
            <div className="hi">{listItems}</div>
          </Box>
        </ChakraProvider>
        <ChakraProvider>
          <Box
            backgroundColor="yellow.500"
            bgGradient="linear(to right, #000000,#442222,#000000)"
          >
            <div className="hi">{listItems}</div>
          </Box>
        </ChakraProvider>
      </div>
    </>
  );
}
