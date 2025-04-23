import React, { useEffect, useState } from "react";
import Blog from "../blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);
  return (
    <div>
      <div className="overflow-x-aut">
        <table className="table">
          {/* head */}
          <thead className=" text-black">
            <tr>
              <th>
                <p>Items</p>
              </th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid Now</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog) => (
              <Blog blog={blog} key={blog.id}></Blog>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blogs;
