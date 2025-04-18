import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/cKqFWW9d/Banner-min.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl font-bold">
              Bid on Unique Items from <br /> Around the World
            </h1>
            <p className="mb-5">
              Discover rare collectibles, luxury goods, and vintage <br />{" "}
              treasures in our curated auctions
            </p>
            <button className="btn btn-xs px-5 py-3 rounded-full text-xs">
              Explore Auctions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
