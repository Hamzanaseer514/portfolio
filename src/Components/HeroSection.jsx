import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


const HeroSection = () => {
  // style={{background: "linear-gradient(90deg, rgba(6,226,212,0.7848389355742297) 0%, rgba(164,202,207,0.7820378151260504) 39%, rgba(47,96,172,1) 82%)"}}
  return (
    <>
      <section  className="" id="home">
        <div className="flex flex-col sm:flex-row-reverse">
          <div className="  w-[100%] sm:w-[50%] " data-aos="fade-up" data-aos-duration="4000">
            <img className="w-[100%] forShadow" src="./heropic.png" alt="" />
          </div>
          <div className="flex flex-col sm:gap-2 md:gap-3 lg:gap-4 text-center py-5   justify-center items-center w-[100%] sm:w-[50%] "    data-aos="fade-down" data-aos-duration="4000">
            <div className="">
              <h2 className="text-xl md:text-2xl lg:text-2xl lg:tracking-[5px] ">
                {/* <p>Welcome TO Tech World</p> */}
                I'm  <span className=" font-bold">Ameer Hamza</span>
              </h2>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:tracking-[5px] animate-typing overflow-hidden whitespace-nowrap">
                {/* <p>Welcome TO Tech World</p> */}
                I'm a <span className="text-[#3b63ff] font-bold ">Web Developer</span>
              </h2>
            </div>
            <div className="flex text-lg justify-center pt-3 space-x-3 sm:space-x-5 md:space-x-7 lg:space-x-8 items-center md:text-xl lg:text-2xl">
              <a className="hover:text-white hover:bg-[#63b3ed] bg-white  border border-[#63b3ed] p-2 rounded-3xl" href="">
                <FaGithub />
              </a>
              <a className="hover:text-white hover:bg-[#63b3ed] bg-white  border border-[#63b3ed] p-2 rounded-3xl" href="">
                {" "}
                <FaLinkedinIn />
              </a>
              <a className="hover:text-white hover:bg-[#63b3ed] bg-white  border border-[#63b3ed] p-2 rounded-3xl" href="">
                {" "}
                <MdAlternateEmail />
              </a>
              <a className="hover:text-white hover:bg-[#63b3ed] bg-white  border border-[#63b3ed] p-2 rounded-3xl" href="">
                {" "}
                <IoLogoWhatsapp />
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
