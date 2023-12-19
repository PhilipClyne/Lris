import React from "react";
import { Link } from "react-router-dom";
import AwardBooks from "../assets/awardbooks.png";
const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-teal-100 lg:px-24">
      <div className=" flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-4xl font-bold mb-6 leading-snug">
          2023 National Book Awarks for Fiction Shorlists
          <Link to="/shop" className="mt-6 block">
            <button className="bg-blue-500 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
              Explore More
            </button>
          </Link>
        </div>
        <div>
          <img src={AwardBooks} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
