import React from "react";
import Skills from "./Skills";

const About = () => {
  return (
    <>
      <section className="p-5 ">
        <h1 className="text-center text-4xl from-stone-950 pt-6 pb-2 mb-7  font-bold">
          LEARN MORE ABOUT ME
        </h1>
        <div className="flex justify-evenly flex-col sm:flex-row">
          <div className="hidden sm:block w-[50%] lg:px-10">
            <img
              className="border-l-8 border-t-8 border-[#3b63ff]"
              src="./about.png"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-self-start sm:w-[50%] lg:p-10 border-l-8 border-[#3b63ff]">
            <h2 className="text-justify p-2 px-5 lg:text-2xl xl:text-3xl text-xl font-bold pt-6 pb-2 text-[#c4c9c6] ">
              Computer Science Student & Web Developer
            </h2>
            <p className="text-justify lg:text-xl p-2 px-5  container">
              As a 5th semester Computer Science student at UET Lahore with
              expertise in MERN stack web development. Experienced in
              internships and personal projects, focusing on web development.
              Strong foundation in programming, algorithms, and data structures.
              Eager to apply skills and gain practical experience in the field.
            </p>
            <div class="text-justify p-2 px-5">
              <p class="text-xl font-bold mb-2 text-[#3b63ff]">Birthday:</p>
              <p class="text-sm md:text-lg lg:text-xl ">
                08-01-2004
              </p>
            </div>
            <div class=" text-justify p-2 px-5">
              <p class="text-xl font-bold mb-2 text-[#3b63ff]">Email:</p>
              <p class="text-sm md:text-lg lg:text-xl  underline text-[#354277]">
                hamzanaseer496@gmail.com
              </p>
            </div>
            <div class="text-justify p-2 px-5">
              <p class="text-xl font-bold mb-2 text-[#3b63ff]">Degree:</p>
              <p class="text-sm md:text-lg lg:text-xl ">
                Bachelor
              </p>
            </div>
            
            {/* <div className="">
              <div class="flex justify-between mx-3">
                <p class="font-bold">Birthday:</p>
                <p class="">08-01-2004</p>
              </div>
              <div class="flex justify-between mx-3">
                <p class="font-bold">CNIC:</p>
                <p class="">34104-5646267-7</p>
              </div>
            </div> */}
            {/* <div className="flex w-[100%]">
              <div class=" text-justify p-2 px-5 md:w-[50%] ">
                <p class="text-lg font-bold mb-2">Phone:</p>
                <p class="text-sm">+92 343-0601827</p>
              </div>
              <div class=" text-justify p-2 px-5 md:w-[50%]">
                <p class="text-lg font-bold mb-2">Degree:</p>
                <p class="text-sm">Bachelor</p>
              </div>
            </div>
            <div className="flex  w-[100%] ">
              <div class=" text-justify p-2 px-5 md:w-[50%] ">
                <p class="text-lg font-bold mb-2">Nationality:</p>
                <p class="text-sm">Pakistani</p>
              </div>
              <div class=" text-justify p-2 px-5 md:w-[50%]">
                <p class="text-lg font-bold mb-2">Age:</p>
                <p class="text-sm">20</p>
              </div>
            </div>
            <div className=" ">
              <div class=" text-justify p-2 px-5">
                <p class="text-lg font-bold mb-2">Email:</p>
                <p class="text-sm">hamzanaseer496@gmail.com</p>
              </div>
              
            </div> */}

            <div className="flex justify-evenly items-center">
              <button className="p-3 border bg-[#3b63ff] font-bold hover:text-[#3b63ff] hover:border-[#3b63ff] hover:bg-white  text-white rounded-xl my-5">
                Hire me
              </button>
              <button className="p-3 border border-[#3b63ff] font-bold text-[#3b63ff] rounded-xl hover:text-white hover:bg-[#3b63ff]  my-5">
                My CV
              </button>
            </div>
          </div>
        </div>
        <div>
          <Skills />
        </div>
      </section>
    </>
  );
};

export default About;
