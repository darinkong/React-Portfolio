import Image from "next/image";
import React from "react";
import { AiFillGithub, AiFillWechat, AiOutlineMail } from "react-icons/ai";

import { FiDownload } from "react-icons/Fi";

import deved from "../public/dev-ed-wave.png";

const Hero = () => {
  return (
    <section className="min-h-screen">
      <div className="text-center p-10 py-5">
        <h2 className="text-4xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-5xl">
          孔骁
        </h2>
        <h3 className="text-2xl font-bold py-2 mb-3 text-gray-600 dark:text-white md:text-3xl">
          Web Developer
        </h3>

        <div className=" text-2xl md:text-4xl flex justify-center gap-16 py-2 text-gray-500 dark:text-gray-400">
          <a href="https://github.com/darinkong?tab=repositories">
            <AiFillGithub className="cursor-pointer" />
          </a>
          <a href="mailto:xkongdarin@gmail.com">
            <AiOutlineMail className="cursor-pointer" />
          </a>
          <a href="#contact">
            <AiFillWechat className="cursor-pointer" />
          </a>
        </div>

        <div className="mx-auto bg-gradient-to-b from-teal-600 dark:from-teal-500 rounded-full w-48 h-48 relative overflow-hidden mt-10 sm:h-80 sm:w-80 md:h-96 md:w-96 ">
          <Image src={deved} layout="fill" objectFit="cover" alt="avatar" />
        </div>
        <div className="flex justify-center mt-2 md:mt-8 py-6 md:py-8 ">
          <button
            type="button"
            className="rounded-lg btn btn-outline btn-accent "
          >
            <a
              href="/resume.pdf"
              download
              className="flex justify-center items-center gap-1 px-1 md:px-2 text-md md:text-lg"
            >
              {<FiDownload className="mt-1" />}简历
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
