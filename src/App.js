// file to collect all App page and export it to index.js

import Navbar from "./navbar";
import Home from "./Home";
import Practicum from "./Practicum";

function App() {
  const title = "This will be the content of the blog";

  return (
    <div className="App">
      <Navbar />
      <header className="content">
        <Home />
      </header>
      <Practicum />
    </div>
  );
}

export default App;
