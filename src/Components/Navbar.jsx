import React, { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { MdModeNight } from "react-icons/md";
import { a } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { MdLightMode } from "react-icons/md";

const Navbar = () => {
  // const [nav, setnav] = useState("100px");
  const [isClick, setisClick] = useState(false);
  const [isdark, setisdark] = useState(false);
  const handleClick = () => {
    setisClick(!isClick);
  };
  const handledark = () => {
    setisdark(!isdark);
  };
  return (
    <>
      <nav>
        {/* mg:fixed */}
        <div className="flex justify-between items-center p-9 text-xl h-8    w-full bg-slate-100">
          <div className=" ">
            <img
              src="./hamzalinkedin.JPG"
              className="rounded-[50%] min-w-7 max-h-7 sm:min-w-12 sm:max-h-12"
              alt="HAMZA"
            />
          </div>
          <div
            className={` md:text-xs md:flex font-bold lg:text-xl  space-x-10 text-[#c4c9c6] min-w-[770px]:translate-y-40 min-w-[770px]:space-y-7 -translate-x-[500px] md:translate-x-6`}
          >
            <div>
              <a className="" href=""></a>
            </div>
            <div>
              <a className="hover:text-[#3b63ff]" href="#home">
                Home
              </a>
            </div>
            <div>
              <a className="hover:text-[#3b63ff]" href="#about">
                About
              </a>
            </div>
            <div>
              <a className="hover:text-[#3b63ff]" href="#services">
                Services
              </a>
            </div>
            <div>
              <a className="hover:text-[#3b63ff]" href="#projects">
                Projects
              </a>
            </div>
            <div>
              <a className="hover:text-[#3b63ff]" href="#contactus">
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center space-x-3">
            <div className="md:text-lg  ">
              <div
                className="flex justify-between items-center space-x-2 "
                onClick={handledark}
              >
                <div className="ml-4 ">
                  {isdark ? (
                    <span>
                      <MdLightMode />
                    </span>
                  ) : (
                    <span>
                      <MdModeNight />
                    </span>
                  )}
                </div>
                <p className="hidden md:block text-[#c4c9c6]  font-bold cursor-pointer">
                  Change Mode
                </p>
              </div>
            </div>
            <div onClick={handleClick}>
              {isClick ? (
                <div className="md:hidden ">
                  <ImCross />
                </div>
              ) : (
                <div className="md:hidden">
                  <TfiAlignJustify />
                </div>
              )}
            </div>
          </div>
        </div>
        {isClick && (
          <div className="lg:hidden bg-white text-[#c4c9c6]   font-bold">
            
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 sm:text-xl ">
              <a
                href="#home"
                className=" block  rounded-lg p-2 hover:text-[#3b63ff]"
              >
                Home
              </a>
              <a
                href="#about"
                className=" block  rounded-lg p-2 hover:text-[#3b63ff]"
              >
                About
              </a>
              <a
                href="#services"
                className=" block  rounded-lg p-2 hover:text-[#3b63ff]"
              >
               Services
              </a>
              <a
                href="#projects"
                className=" block  rounded-lg p-2 hover:text-[#3b63ff]"
              >
                Projects
              </a>
              <a
                href="#contactus"
                className=" block rounded-lg p-2 hover:text-[#3b63ff]"
              >
                Contact Us
              </a>
              
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
