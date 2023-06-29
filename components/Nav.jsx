import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = ({ toggle }) => {
  return (
    <nav className="py-2 md:py-3 mb-6 md:mb-8 flex justify-between items-center dark:text-white">
      <div className="cursor-pointer">
        <Link href="/">
          <h1 className="font-burtons text-lg md:text-2xl text-gray-500 dark:text-white">
            developedby<span className="text-teal-500">dk </span>
          </h1>
        </Link>
      </div>

      <ul className="flex items-center gap-2 md:gap-5">
        <li>
          <label className="swap swap-rotate ">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-8 md:w-10 h-8 md:h-10 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={toggle}
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
            {/* sun icon */}
            <svg
              className="swap-on fill-current  w-8 md:w-10 h-8 md:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={toggle}
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          </label>
        </li>
        <li>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="text-2xl md:text-4xl btn btn-primary drawer-button bg-gray-400 dark:bg-gray-900 border-none hover:bg-gray-500  dark:hover:bg-gray-900"
              >
                <GiHamburgerMenu />
              </label>
            </div>
            <div className="drawer-side  ">
              <label htmlFor="my-drawer" className="drawer-overlay "></label>
              <ul
                className=" menu p-4 w-15 sm:w-40 h-full bg-base-200! bg-gray-500 dark:bg-gray-900 text-base-content! 
        text-md sm:text-2xl font-semibold text-white flex flex-col justify-center items-center opacity-80"
              >
                {/* Sidebar content here */}
                <li className="my-12  ">
                  <a href="#" className="hover:text-gray-300">
                    首页
                  </a>
                </li>
                <li className="my-12  ">
                  <a href="#skills" className="hover:text-gray-300">
                    关于
                  </a>
                </li>
                <li className="my-12">
                  <a href="#project" className="hover:text-gray-300">
                    项目
                  </a>
                </li>
                <li className="my-12">
                  <a href="#contact" className="hover:text-gray-300">
                    联系
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
