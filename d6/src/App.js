import { useState } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";

import Albums from "./Albums";

function App() {
  const albums = [

    {
      id: 1,
      artist: "A.R.Rehman",
      album_title: "Rockstar",
      album_cover:
        "https://upload.wikimedia.org/wikipedia/en/2/2b/Rockstar_%28soundtrack%29.jpg",
    },
    {
      id: 2,
      artist: "A.R.Rehman",
      album_title: "HighWay",
      album_cover:
        "https://upload.wikimedia.org/wikipedia/en/c/c5/Highway_OST.jpg",
    },
    {
      id: 3,
      artist: "A.R.Rehman",
      album_title: "Ghajini",
      album_cover:
        "https://a10.gaanacdn.com/images/albums/45/145/crop_480x480_145.jpg",
    },
    {
      id: 4,
      artist: "A.R.Rehman",
      album_title: "Jodha-Akbar",
      album_cover:
        "https://i.scdn.co/image/ab67616d0000b27346131d4d7919c5cacd15c7d3",
    },
    {
      id: 5,
      artist: "A.R.Rehman",
      album_title: "Jodha-Akbar",
      album_cover:
        "https://i.scdn.co/image/ab67616d0000b273a00249b8bf77312ec156dd4b",
    },
  ];


  return (
    <div className="App">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
        alt="spotify"
        style={{ width: "18vw", margin: "0 0 7vh 2vw" }}
      />
      <div>
        <Head>Albums</Head>
        <Albums albums={albums} />
      </div>
    </div>
  );
}

export default App;

const Head = styled.span`
  color: #fbfbfb;
  font-weight: 500; 
  font-size: 1.3rem;
  margin: 0 2vw;
`;



