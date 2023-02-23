import React from "react";
import { username } from "../data/user.js";
import { city } from "../data/user.js";

// eslint-disable-next-line no-unused-vars
function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export { default as Home } from './components/Home.js';