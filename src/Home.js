import React from "react";
import georgia from "./resources/atlskyline.jpeg"

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const Home = () => {
  return (
    <div className="app-content">
      <h1>Welcome to Lauren's Demo App</h1>
      <h2>September 2022</h2>
      <img src={georgia} alt="a cute little squirrel peering at you from the tall grass"></img>
    </div>
  );
};

export default Home;


