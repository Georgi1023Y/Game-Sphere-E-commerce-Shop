import React, {useState} from "react";
import { viewOptions } from "../assets/data";
import { categories } from "../assets/data";

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  };

  return (
    <div>
      <nav className="sm:w-32 sm:h-full md:w-48 md:h-full  bg-darkGray flex flex-col lg:w-56 lg:h-full xl:w-72 xl:h-full md:pb-72 sm:pb-72 lg:pb-72 max-padding-bottom">
        {/* Logo Image + GAME STORE TEXT */}
        <div className="flex flex-row items-center mt-4 cursor-pointer">
          <img
            src="https://cdn-icons-png.flaticon.com/128/8198/8198243.png?ga=GA1.1.785168996.1698608856&semt=ais"
            alt="logo"
            className="sm:w-6 sm:h-6 sm:mr-2 sm:ml-4 md:mr-2 md:w-10 md:h-10 md:ml-4 lg:w-12 lg:h-12 xl:w-16 xl:h-16 lg:mx-4"
          />
          <p className="sm:text-xs lg:text-lg xl:text-2xl text-purpleLight font-semibold">
            GAME <br />
            <span className="ml-4 sm:ml-1 sm:text-xs lg:text-lg xl:text-2xl text-purpleDark fonr-semibold">
              STORE
            </span>
          </p>
        </div>

        {/* CATALOG BUTTON */}
        <div className="sm:my-4 flex justify-center my-6">
          <button className="sm:py-1 sm:px-2 md:py-2 md:px-12 bg-grayIco lg:py-1 lg:px-4 xl:py-2 xl:px-4 rounded-xl text-white hover:bg-purpleDark hover:border-purpleDark transition duration-300 hover:scale-110">
            <p className="lg:text-xl xl:text-2xl">Catalog</p>
          </button>
        </div>

        {/* VIEW OPTIONS */}
        <div className="sm:ml-2 md:ml-6 flex flex-col ml-10">
          {viewOptions.map((option) => (
            <div key={option.id}>
              <div className="sm:mb-4 flex flex-row mb-8 cursor-pointer">
                <img
                  src={option.imageLink}
                  alt={option.text}
                  className="sm:mr-2 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 w-6 h-6 mr-6"
                />
                <span className="sm:text-sm md:text-lg lg:text-lg xl:text-2xl flex items-center text-white">
                  {option.text}
                </span>
              </div>
            </div>
          ))}
          <div className="sm:gap-8 sm:flex sm:items-center md:gap-10 md:items-center flex flex-row gap-36 mb-8">
            {/* CATEGORY HEADING + IMAGE FOR TOGGLING MENU */}
            <p className="sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-white">
              Category
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/128/225/225197.png?ga=GA1.1.785168996.1698608856&semt=ais"
              alt="show-categories"
              className="lg:w-8 lg:h-8 xl:w-10 xl:h-10 w-4 h-4 cursor-pointer"
              onClick={handleToggle}
            />
          </div>
          {/* ALL CATEGORIES */}
          <div className="flex flex-col">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`${toggleMenu ? "" : "hidden"}`}
              >
                <div className="sm:mb-6 flex flex-row mb-8 cursor-pointer">
                  <img
                    src={category.imageLink}
                    alt={category.text}
                    className="sm:mr-2 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 w-6 h-6 mr-6"
                  />
                  <span className="sm:text-sm md:text-lg lg:text-lg xl:text-2xl flex items-center text-white">
                    {category.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
