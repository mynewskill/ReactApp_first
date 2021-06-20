// destructure from 'props' object
const BlogList = ({ blogs, handleDelete }) => {
  //   const records = props.blogs;

  return (
    <div className='blog-list'>
      {/* map() method creates a NEW array with the results of calling a function for every array element. */}
      {blogs.map((item) => (
        <div className='blog-preview' key={item.id}>
          <h2>{item.title}</h2>
          <p>Written by {item.author}</p>
          <button onClick={() => handleDelete(item.id)}>Delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
