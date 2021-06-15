import { useState } from "react"; // get useState hook (special trigger function for update DOM)

const Home = () => {
  // let name = "Your name";
  // set props 'name' and 'age' getter and setter
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(18);
  //set prop blog and save to it list of objects
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

  const handleClick = (name, age) => {
    setName(name);
    setAge(age);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        Hi! My name is {name} and I {age} years old.
      </p>
      {/* use annonimus arrow function to trigger handeClick function */}
      <button onClick={() => handleClick("Ksyusha", 23)}>Click Me</button>
      {blog.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
