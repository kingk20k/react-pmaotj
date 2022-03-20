import React, { useState } from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/dist/plyr.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ChakraProvider, Box } from '@chakra-ui/react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const TOP = () => <Box backgroundColor="#4a3c3c" display="flex" mt={0} p={5} />;
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category:"desert",
    rating:4,
    time:"40m",
    episode:2
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category:"desert",
    rating:4,
    time:"40m",
    episode:2
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category:"desert",
    rating:4,
    time:"40m",
    episode:2
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category:"desert",
    rating:4,
    time:"40m",
    episode:2
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category:"desert",
    rating:4,
    time:"40m",
    episode:2
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    category:"desert",
    rating:4,
    time:"40m",
    episode:2
  },
];
export default function Expenses() {
  const listItems = DATA.map(item =>
    <p>item.rating</p>)
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>fds</h2>
      <button onClick={}>djfndjf</button>
      <h1>{window.location.pathname}</h1>
      <div>
        <ScrollMenu
          data={listItems}
          dragging={true}
          wheel={false}
          alignCenter={false}
          clickWhenDrag={false}
        />
      </div>
    </main>
  );
}
