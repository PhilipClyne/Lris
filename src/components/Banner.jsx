import React from "react";
import BannerCard from "../Home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 items-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left side */}
        <div className="md:w-1/2 space-x-8 h-full">
          <h2 className="text-6xl font-bold leading-snug text-black">
            Buy and Sell Your Books
            <span className="text-blue-700"> for best prices</span>
          </h2>
          <p className="md:w-4/5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            reprehenderit earum rerum dolor sint corrupti, odit, laborum
            officia, qui accusamus magnam molestias iste quia natus ad. Odit
            voluptate maiores aut. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consequatur iure, asperiores ab quidem architecto,
            autem fugit delectus at vitae inventore quam assumenda error nihil
            sed. Cupiditate eveniet provident quisquam nihil?
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              autoComplete={false}
              placeholder="Search a book"
              className="py-2 px-10 rounded-sm outline-none mt-4"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>

        {/* right side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
