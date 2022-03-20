import React from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/dist/plyr.css';
import { Link } from 'react-router-dom';
import { MessageOutlined } from '@ant-design/icons';
import Anime from "../components/Home/Anime"
const videoSrc = {
  type: 'video',
  sources: [
    {
      src: 'yWtFb9LJs3o',
      provider: 'youtube',
    },
  ],
};

// learn more https://github.com/sampotts/plyr#the-source-setter
import { ChakraProvider, Box, IconButton } from '@chakra-ui/react'
import { DragHandleIcon, SettingsIcon } from '@chakra-ui/icons'
import Parse from 'parse/dist/parse.min.js';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'ptyF8Aisz7ihqw5W55G9n5vCBpRLuBVlKbE2D8bu';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'pzKLOj2CpjLy8RW6xlbB5hV5DcdC8glrzn60XLcI';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;
const Undefined = () => (


  <ChakraProvider resetCSS>
    <Box
      backgroundColor="whiteAlpha.500"
      display="flex"
      mt={0}
      p={5}
      bgGradient="linear(to right, #363434,#652626)"
    >
      <IconButton
        aria-label="icon"
        size="md"
        icon={}
        colorScheme="blackAlpha"
        isRound
        variant="outline"
        ml={7}
        overflow="hidden"
      />
    </Box>
  </ChakraProvider>
);
export default function App() {

  

  

 

  

  return (
    <div>
        <button >dsssaff</button>
        <Undefined />
        <Anime/>

    </div>
  );
}

export const MyComponent = () => {
  return (
    <>
      <Plyr source={videoSrc} />
    </>
  );
};
