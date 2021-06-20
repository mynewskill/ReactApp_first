import { useState, useEffect } from "react";
import BlogList from "./BlogList";
/* get useState hook (special trigger function for update DOM)
 * hooks replace lifecycle methods from class base components
 * in function base components*/

const Home = () => {
  // set props 'name' and 'age' getter and setter
  /*  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(18); */

  //set blog states as list of objects
  const [blog, setBlog] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    // The filter() method creates a NEW array filled with all array elements that pass a test
    const newBlogs = blog.filter((item) => item.id !== id);
    setBlog(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
  }, []);

  /* const handleClick = (name, age) => {
    setName(name);
    setAge(age);
  }; */

  return (
    <div className='home'>
      <h2>Homepage</h2>
      <BlogList blogs={blog} handleDelete={handleDelete} />
      {/* <p>
        Hi! My name is {name} and I {age} years old.
      </p> */}
      {/* use annonimus arrow function to trigger handeClick function */}
      {/* <button onClick={() => handleClick("Ksyusha", 23)}>Click Me</button> */}
    </div>
  );
};

export default Home;
