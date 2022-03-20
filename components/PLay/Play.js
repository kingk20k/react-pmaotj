import React, { useState, useEffect } from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/dist/plyr.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ChakraProvider, Box, Grid,IconButton } from '@chakra-ui/react';
import Flowplayer from '@flowplayer/react-flowplayer';
import ReactFlowPlayer from 'react-flow-player';
import Flowplayer from '@flowplayer/react-flowplayer';
import './Play.css';
import ScriptTag from 'react-script-tag';
import './flow.css';
import { Helmet } from 'react-helmet';
import Episode from "./Episodes"
export default function Play() {
  console.log(window.innerWidth)
  const [x , setheight2] = useState("https://api.vadoo.tv/iframe_test?id=Azv4AAgjcGvofT9ziCruNWmHFtQsOpPb")
  console.log(x)
  const uu = "https://api.vadoo.tv/iframe_test?id=D1P5pKrgtyl20FR1HU_hDM9OUwD95G_V"
  function cool(){
    setheight(uu)

  }
  const Undefined = () => (
    <div className="ho">
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
    </div>
  );
  return (
    <>
    
      <Undefined/>
        <button onClick={() => setheight2(uu)}>fdfdf</button>
        <Episode/>
        <iframe src={x} scrolling="no" allowfullscreen="1" allow="autoplay" className="poke"></iframe>
        
      
    </>
  );
}
