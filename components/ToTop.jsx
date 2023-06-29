import React from "react";

import { BiHome } from "react-icons/bi";

import { MdLaptopMac } from "react-icons/md";

import { FaArrowCircleUp, FaGraduationCap } from "react-icons/fa";

const ToTop = () => {
  return (
    <div className="flex flex-col text-gray-600 dark:text-gray-400 ">
      <p className="flex justify-center mb-3 md:mb-5 py-1 md:py-2 text-xl md:text-3xl text-gray-500 dark:text-gray-200">
        <FaArrowCircleUp />
      </p>
      <div className="flex justify-center text-2xl md:text-4xl ">
        <ul className="flex flex-row justify-center items-center gap-8 md:gap-12">
          <li>
            <a href="#" className="flex flex-col items-center">
              <BiHome />
            </a>
          </li>
          <li>
            <a href="#skills" className="flex flex-col items-center">
              <FaGraduationCap />
            </a>
          </li>
          <li>
            <a href="#project" className="flex flex-col items-center">
              <MdLaptopMac />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToTop;
