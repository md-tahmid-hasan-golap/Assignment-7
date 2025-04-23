import React from "react";
import { GiSelfLove } from "react-icons/gi";

const Blog = ({ blog }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tr>
            <th></th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img src={blog.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{blog.title}</div>
                  <div className="text-sm opacity-50"></div>
                </div>
              </div>
            </td>
            <td>
              <br />
              <span className="badge badge-ghost badge-sm">
                ${blog.currentBidPrice}
              </span>
            </td>
            <td>{blog.TimeLeft}</td>
            <th>
              <button className="btn btn-ghost btn-xs">
                <GiSelfLove size={25} />
              </button>
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Blog;
