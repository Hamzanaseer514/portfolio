import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaD, FaDesktop } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { SiTaichigraphics } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { CgArrowLongRightE } from "react-icons/cg";

const MyServices = () => {
  return (
    <>
      <section id="services">
        <div>
          <div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-10 text-center  "
              data-aos="fade-up"
              data-aos-duration="5000"
            >
              My Services
            </h1>
          </div>
          <div class="mx-auto max-w-7xl w-full px-4 py-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10">
              <div
                class="bg-gray-200 rounded-lg shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] transform origin-center rotate-45  p-6 hover:text-white hover:bg-[#63b3ed] "
                data-aos="fade-up"
                data-aos-duration="4000"
              >
                <div class="flex items-center text-6xl justify-center mb-4">
                  <CgWebsite />
                </div>
                <h2 class="text-xl font-bold my-5 ">
                  Full Stack Web Development
                </h2>
                <p class="">
                  I can build dynamic, responsive, and user-friendly web
                  applications using the MERN stack. Leveraging MongoDB,
                  Express, React, and Node.js, I create efficient, scalable, and
                  high-performance web solutions.
                </p>
                <a href="#about">
                  <div className="flex text-blue-800 font-bold hover:underline justify-end items-center cursor-pointer gap-1">
                    <div>
                      <h1 className="text-sm">Get Service</h1>
                    </div>
                    <div className="text-xl">
                      <CgArrowLongRightE />
                    </div>
                  </div>
                </a>
              </div>
              <div
                class="bg-gray-200 rounded-lg shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] p-6 hover:text-white hover:bg-[#63b3ed]"
                data-aos="fade-up"
                data-aos-duration="7000"
              >
                <div class="flex items-center text-6xl justify-center mb-4">
                  <FaDesktop />
                </div>
                <h2 class="text-xl font-bold my-5 ">. Net Developer</h2>
                <p class="">
                  I can develop fully responsive desktop applications using .NET
                  Forms, delivering robust and user-friendly software solutions
                  tailored to meet your specific needs. You can contact me for any .Net development.
                </p>
                <a href="#about">
                  <div className="flex text-blue-800 font-bold hover:underline justify-end items-center cursor-pointer gap-1">
                    <div>
                      <h1 className="text-sm">Get Service</h1>
                    </div>
                    <div className="text-xl">
                      <CgArrowLongRightE />
                    </div>
                  </div>
                </a>
              </div>
              <div
                class="bg-gray-200 rounded-lg shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] p-6 hover:text-white hover:bg-[#63b3ed] "
                data-aos="fade-up"
                data-aos-duration="9000"
              >
                <div class="flex items-center text-6xl justify-center mb-4">
                  <FaDatabase />
                </div>
                <h2 class="text-xl font-bold my-5 ">Database Design</h2>
                <p class="">
                  I am proficient in designing comprehensive database systems.
                  Whether it’s for a new application or an existing system, I
                  can create detailed and efficient database designs tailored to
                  meet your specific needs.
                </p>
                <a href="#about">
                  <div className="flex text-blue-800 font-bold hover:underline justify-end items-center cursor-pointer gap-1">
                    <div>
                      <h1 className="text-sm">Get Service</h1>
                    </div>
                    <div className="text-xl">
                      <CgArrowLongRightE />
                    </div>
                  </div>
                </a>
              </div>
              <div
                class="bg-gray-200 rounded-lg shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] p-6 hover:text-white hover:bg-[#63b3ed] "
                data-aos="fade-up"
                data-aos-duration="9000"
              >
                <div class="flex items-center text-6xl justify-center mb-4">
                  <SiTaichigraphics />
                </div>
                <h2 class="text-xl font-bold my-5 ">Graphic Designing</h2>
                <p class="">
                  I also have expertise in graphic design and can create
                  visually appealing designs using Canva, ensuring high-quality
                  and professional graphics for your needs. you can contact me
                  for any design.
                </p>
                <a href="#about">
                  <div className="flex text-blue-800 font-bold hover:underline justify-end items-center cursor-pointer gap-1">
                    <div>
                      <h1 className="text-sm">Get Service</h1>
                    </div>
                    <div className="text-xl">
                      <CgArrowLongRightE />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyServices;
