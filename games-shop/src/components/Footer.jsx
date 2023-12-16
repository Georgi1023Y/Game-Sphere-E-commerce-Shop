import React from "react";
import { socialIcons } from "../assets/data";

const Footer = () => {
  return (
    <div className="flex justify-center align-middletext-white bg-darkGray px-3 py-3">
      <div className="flex flex-row">
        <div className="flex flex-col">
          {/* LOGO + STORE NAME */}
          <div className="flex flex-row items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/8198/8198243.png?ga=GA1.1.785168996.1698608856&semt=ais"
              alt="logo"
              className="sm:w-6 sm:h-6 sm:mr-2 sm:ml-4 md:mr-2 md:w-10 md:h-10 md:ml-4 lg:w-12 lg:h-12 xl:w-16 xl:h-16 lg:mx-4"
            />
            <p className="text-3xl text-white">Game Sphere</p>
          </div>
          {/* SOCIAL PROFILES LINKS */}
          <div className="flex flex-row">
            {socialIcons.map((icon, index) => (
              <div>
                <img
                  src={icon.imageLink}
                  alt={icon.text}
                  className="sm:w-6 sm:h-6 sm:mr-2 sm:ml-4 md:mr-2 md:w-10 md:h-10 md:ml-4 lg:w-10 lg:h-10 xl:w-10 xl:h-10 lg:mx-4 xl:ml-5 xl:mr-1 hover:scale-110 duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
