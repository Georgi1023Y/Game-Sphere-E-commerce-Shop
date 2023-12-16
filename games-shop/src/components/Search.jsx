import React, { useState } from "react";

const Search = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row lg:gap-80 xl:gap-96">
        {/* SEARCH BAR */}
        <div className="text-white relative flex items-center">
          <svg
            className="w-6 h-6 absolute left-3 sm:mt-4 md:mt-4"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3333 2.66666C7.452 2.66666 2.66667 7.45199 2.66667 13.3333C2.66667 19.2147 7.452 24 13.3333 24C15.7 23.9995 17.9984 23.2072 19.8627 21.7493L25.724 27.6107L27.6093 25.7253L21.748 19.864C23.2067 17.9995 23.9994 15.7006 24 13.3333C24 7.45199 19.2147 2.66666 13.3333 2.66666Z"
              fill="#8A8A8A"
            />
          </svg>
          <input
            type="search"
            className="bg-grayIco bg-opacity-25 w-full sm:w-36 sm:pl-10 sm:py-1 sm:mt-4 md:w-60 md:pl-10 md:py-1 md:mt-4 rounded-full border-none outline-none"
            placeholder="Search"
          />
        </div>
        {/* NOTIFICATIONS,CART AND PROFILE ICONS  */}
        <div className="hidden lg:flex xl:flex flex-row items-center sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4">
          {/* NOTIFICATIONS ICON */}
          <img
            src="https://cdn-icons-png.flaticon.com/128/3503/3503426.png?ga=GA1.1.785168996.1698608856&semt=ais"
            alt="notifications-icon"
            className="w-6 h-6 cursor-pointer filter brightness-100 contrast-125"
          />
          {/* CART ICON */}
          <img
            src="https://cdn-icons-png.flaticon.com/128/8826/8826940.png?ga=GA1.1.785168996.1698608856&semt=ais"
            alt="cart-icon"
            className="w-8 h-8 ml-1 cursor-pointer filter brightness-100 contrast-125"
          />
          {/* PROFILE ICON */}
          <img
            src="https://cdn-icons-png.flaticon.com/128/7122/7122917.png?ga=GA1.1.785168996.1698608856&semt=ais"
            alt="profile-picture filter brightness-100 contrast-125"
            className="w-10 h-10 ml-2 rounded-full cursor-pointer"
          />
        </div>
      </div>
      {/* SECOND PART OF THE SEARCH COMPONENT - BUY VR FOR MOBILE AND TABLETS */}
      <div className="lg:hidden xl:hidden flex flex-col items-center mt-8">
        <img
          src="https://img.freepik.com/free-photo/young-adult-wearing-futuristic-smart-glasses-indoors-generated-by-ai_188544-32756.jpg?ga=GA1.1.785168996.1698608856&semt=ais_ai_generated"
          alt="vr-image"
          className="md:w-2/3 md:h-2/3"
        />
        <div className="sm:mt-4 md:mt-8">
          <button className="bg-white bg-opacity-25 sm:py-1 sm:px-2 md:py-2 md:px-4 rounded-full hover:bg-purpleDark hover:scale-110">
            <div className="flex flex-row items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/6575/6575522.png?ga=GA1.1.785168996.1698608856&semt=ais"
                alt="order-now"
                className="sm:w-6 sm:h-6 sm:mr-0.5 md:w-12 md:h-12 md:mr-2 rounded-full filter brightness-110 contrast-150"
              />
              <span className="text-white md:text-xl">Order Now</span>
            </div>
          </button>
        </div>
      </div>
      {/* SECOND PART OF THE SEARCH COMPONENT - BUY VR FOR LAPTOP AND DESKTOP */}
      <div className="hidden lg:block xl:block mt-8 relative">
        <img
          src="https://img.freepik.com/free-photo/portrait-young-african-american-man-with-vr-glasses_23-2148932811.jpg?size=626&ext=jpg&ga=GA1.1.785168996.1698608856&semt=ais"
          alt="order-now"
          className="lg:w-4/5 lg:h-4/5 xl:w-4/5 xl:h-4/5 filter brightness-100 contrast-100 rounded-xl"
        />
        <div className="absolute top-12 left-0 text-white pl-12">
          <h1 className="text-3xl font-bold text-white font-mono">
            [ Oculus <span className="text-purpleLight">VR</span> ]
          </h1>
          <h1 className="text-white text-2xl font-mono mt-1">
            Virtual Reality
          </h1>
          <p className="text-base font-mono font-bold mt-2">
            VR box 360 original complete <br />
            game. VR gaming complete set of 2 <br />
            remotes.
          </p>
          <div className="mt-4">
            <button className="bg-white bg-opacity-25 px-4 rounded-full cursor-pointer hover:bg-purpleDark hover:text-white hover:border-purpleDark transition duration-300 hover:scale-110">
              <div className="flex flex-row items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/6575/6575522.png?ga=GA1.1.785168996.1698608856&semt=ais"
                  alt="order-now"
                  className="sm:w-6 sm:h-6 sm:mr-0.5 md:w-12 md:h-12 md:mr-2 rounded-full filter brightness-110 contrast-150 "
                />
                <span className="text-white md:text-2xl text-semibold">
                  Order Now
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
