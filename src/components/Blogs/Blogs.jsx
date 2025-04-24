import React, { useEffect, useState } from "react";
import Blog from "../blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto w-[70%]">
        <table className="table">
          {/* head */}
          <thead className="text-black">
            <tr>
              <th>
                <p>Items</p>
              </th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <Blog key={blog.id} blog={blog}></Blog>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blogs;
