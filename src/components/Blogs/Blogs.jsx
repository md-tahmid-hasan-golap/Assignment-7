import React, { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import { GiSelfLove } from "react-icons/gi";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="flex gap-16 max-w-11/12 mx-auto">
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

      <div className="w-[30%]">
        <div className="bg-white shadow-md p-4 rounded-md">
          <div className="flex space-x-3 justify-center">
            <button>
              <GiSelfLove size={25} />
            </button>
            <h2 className="text-xl font-semibold text-center">
              Favorite Items
            </h2>
          </div>

          <h1 className="text-xl font-semibold mt-7 text-center">
            No favorites yet
          </h1>
          <p className="mt-6 text-center text-gray-600">
            Click the heart icon on any item <br /> to add it to your favorites
          </p>

          <div className="flex justify-between mt-7">
            <h3 className="text-xl font-semibold">Total bids Amount</h3>

            <h2 className="text-xl font-semibold">$0000</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
