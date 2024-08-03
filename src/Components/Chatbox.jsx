import React, { useState } from "react";
import { PiArrowFatLinesUpFill } from "react-icons/pi";
import { PiChatTeardropTextFill } from "react-icons/pi";

const Chatbox = () => {
  // const [isClick, setisClick] = useState(false);
  // const handleclick = () => {
  //   setisClick(!isClick);
  // };
  return (
    <>
      <section>
        <div>
          <a href="#home">
            <div className=" right-5 bottom-5 fixed animate-bounce">
              <div className="text-3xl md:text-4xl lg:text-5xl rounded-sm text-white bg-blue-500">
                <PiArrowFatLinesUpFill />
              </div>
            </div>
          </a>
        </div>
        {/* <div className=" right-5 bottom-5 fixed">
          <div
            className={`text-4xl md:text-6xl lg:text-7xl rounded-sm ${isClick?"hidden":"block"}`}
            onClick={handleclick}
          >
            <PiChatTeardropTextFill />
          </div>
          {isClick && (
            <div className="">
              <div className="border border-green-400 h-64 w-[300px] ">
                goback
              </div>
            </div>
          )}
        </div> */}
      </section>
    </>
  );
};

export default Chatbox;
