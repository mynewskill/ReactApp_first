import Navbar from "./navbar";
import Home from "./Home";

function App() {
  const title = "This will be the content of the blog";

  return (
    <div className="App">
      <Navbar />
      <header className="content">
        <Home />
      </header>
    </div>
  );
}

export default App;
