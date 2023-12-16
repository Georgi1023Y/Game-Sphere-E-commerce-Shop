import React from "react";
import { products } from "../assets/data";

const Games = () => {
  return (
    <div className="flex flex-col text-white lg:mt-10">
      {/* PRODUCT SECTION */}
      <div>
        <h1 className="lg:text-2xl xl:text-3xl sm:my-2 font-semibold">
          Product
        </h1>
      </div>
      {/* FILTER BUTTONS */}
      <div className="sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:mr-6 flex flex-row md:gap-3 md:mt-6 lg:mt-6 lg:gap-3 xl:gap-3">
        {/* TOP BUTTON */}
        <button className="sm:px-3 sm:py-2 sm:mx-1 sm:my-1 md:px-4 sm:text-sm md:py-2 xl:text-xl lg:text-lg text-white border border-white px-6 py-2 rounded-full hover:bg-purpleDark hover:border-purpleDark transition duration-300">
          Top
        </button>
        {/* POPULAR BUTTON */}
        <button className="sm:px-2 sm:py-1 sm:mx-1 sm:my-1 xl:text-xl sm:text-sm lg:text-lg text-white border border-white px-8 py-2 rounded-full hover:bg-purpleDark hover:border-purpleDark transition duration-300">
          Popular
        </button>
        {/* RECOMMEND BUTTON */}
        <button className="sm:hidden sm:px-2 sm:py-1 sm:mx-1 sm:my-1 sm:text-sm xl:text-xl lg:text-lg text-white border border-white px-8 py-2 rounded-full hover:bg-purpleDark hover:border-purpleDark transition duration-300">
          Recommended
        </button>
        {/* FOR YOU SECTION = RECOMMENDED BUT FOR MOBILE DEVICES */}
        <button className="md:hidden xl:hidden lg:hidden sm:text-sm sm:px-2 sm:py-1 sm:mx-1 sm:my-1 xl:text-xl lg:text-lg text-white border border-white px-8 py-2 rounded-full hover:bg-purpleDark hover:border-purpleDark transition duration-300">
          For You
        </button>
        {/* FILTER BUTTON */}
        <button className="sm:px-2 sm:py-1 sm:mx-1 sm:my-1 xl:text-xl lg:text-lg text-white border border-white px-6 py-2 rounded-full hover:bg-purpleDark hover:border-purpleDark transition duration-300">
          <div className="flex flex-row justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/8367/8367578.png?ga=GA1.1.785168996.1698608856&semt=ais"
              alt="filter-icon"
              className="sm:hidden w-6 h-6 mx-auto block mr-1"
            />
            Filter
          </div>
        </button>
      </div>
      {/* GAMING PRODUCTS LIST */}
      <div className="sm:hidden flex justify-center items-center mt-6">
        <div className="sm:grid smmmmxl:grid xl:grid-cols-3 xl:grid-rows-2 lg:grid lg:grid-cols-2 lg:grid-rows-3 md:grid md:grid-cols-1 md:grid-rows-6 justify-center mr-56 mb-10">
          {products.map((product, index) => (
            <div className="flex flex-col items-center bg-darkGray bg-opacity-80 sm:h-32 sm:w-32 w-60 h-64 rounded-xl gap-1 xl:mx-4 xl:my-4 lg:my-4 lg:mx-6 md:mt-4 mx-28">
              <img
                src={product.imageLink}
                alt={product.text}
                className="w-44 h-44 mt-8 mb-4 filter brightness-100 contrast-100 hover:scale-110 duration-200"
              />
              <h1 className=" text-white text-xl sm:text-xs">{product.text}</h1>
              <p className="text-white text-base sm:text-xs">{product.type}</p>
              <p className="text-lg text-purpleLight mb-8 sm:text-xs">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
