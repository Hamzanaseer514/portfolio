import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { MdAttachEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <section>
        <div className="flex flex-col sm:flex-row-reverse">
          <div className="  w-[100%] sm:w-[50%] mt-14">
            <img className="w-[100%] forShadow" src="./heropic.png" alt="" />
          </div>
          <div className="flex flex-col sm:gap-2 md:gap-3 lg:gap-4 text-center py-5  justify-center items-center w-[100%] sm:w-[50%] ">
            <div className="">
              <h2 className="text-xl md:text-2xl lg:text-2xl lg:tracking-[5px] ">
                {/* <p>Welcome TO Tech World</p> */}
                I'm  <span className=" font-bold">Ameer Hamza</span>
              </h2>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:tracking-[5px]">
                {/* <p>Welcome TO Tech World</p> */}
                I'm a <span className="text-[#3b63ff] font-bold">Web Developer</span>
              </h2>
            </div>
            <div className="flex text-xl justify-center pt-3 space-x-3 sm:space-x-5 md:space-x-7 lg:space-x-10 items-center md:text-2xl lg:text-3xl">
              <a href="">
                <FaGithub />
              </a>
              <a href="">
                {" "}
                <ImLinkedin />
              </a>
              <a href="">
                {" "}
                <MdAttachEmail />
              </a>
              <a href="">
                {" "}
                <FaFacebook />
              </a>
            </div>
            <div>
                <button className="p-3 bg-[#3b63ff] font-bold text-white rounded-b-xl rounded-r-xl my-5">HIRE ME</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
