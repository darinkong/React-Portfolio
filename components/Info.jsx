import React from "react";
import { AiOutlineContacts, AiOutlineMail } from "react-icons/ai";
import { RiWechat2Line } from "react-icons/ri";

const Info = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <AiOutlineContacts className="text-3xl md:text-5xl text-gray-600 dark:text-white" />
      </div>
      {/* <p className="text-lg ">Get In Touch</p> */}
      <h1 className="text-gray-600 dark:text-gray-100 text-2xl md:text-4xl font-medium mt-5">
        保持联系
      </h1>
      <div
        className="flex flex-col md:flex-row text-md md:text-xl rounded-3xl dark:bg-gray-800
   border-teal-500 border-2 py-4 md:py-8 px-6 md:px-8 mt-8 md:mt-12 gap-2 md:gap-6 tracking-wide text-gray-600 dark:text-gray-200"
      >
        <div className="flex justify-center dark:hover:text-white ">
          <AiOutlineMail className="m-auto mr-2 text-2xl" />
          <p>
            <a href="mailto:xkongdarin@gmail.com">xkongdarin@gmail.com</a>
          </p>
        </div>
        <div className="flex justify-start items-center dark:hover:text-white">
          <RiWechat2Line className="mr-1 text-2xl" />
          <p>
            <a href="https://www.linkedin.com">18888360178</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
