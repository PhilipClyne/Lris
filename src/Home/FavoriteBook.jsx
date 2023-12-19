import React from "react";
import FavBook from "../assets/favoritebook.jpg";
import { Link } from "react-router-dom";
const FavoriteBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2">
        <img src={FavBook} alt="" className="rounded md:w-10/12" />
      </div>

      <div className="md:w-1/2 space-y-6">
        <h2 className=" text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Find Your Favorite
          <span className="text-blue-700"> Book Here~</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vel
          laboriosam vero similique, non laudantium ut minus? Laborum cumque ad
          praesentium hic quaerat! Quae perferendis natus voluptate dolor, alias
          a. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
          quas ullam cum, soluta dolor nobis a ex recusandae deserunt quia
          dolorem tenetur corrupti neque error quod aperiam velit! Numquam, ex?
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold">800+</h3>
            <p className="text-base">Book Listing</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">900+</h3>
            <p className="text-base">Users everyday</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">1200+</h3>
            <p className="text-base">PDF Free Downloads</p>
          </div>
        </div>
        <Link to="/shop" className="mt-12 block">
          <button className="bg-blue-500 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavoriteBook;
