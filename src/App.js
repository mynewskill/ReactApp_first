// file to collect all App page and export it to index.js

import Navbar from "./Navbar";
import Home from "./Home";
import Practicum from "./Practicum";

function App() {
  const title = "This will be the content of the blog";
  // console.log(this); // undefined
  return (
    <div className='app'>
      <Navbar />
      <header className='content'>
        <Home />
        <h3>{title}</h3>
      </header>
      <Practicum />
    </div>
  );
}

export default App;
