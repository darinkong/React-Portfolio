import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="min-h-screen py-5 " id="skills">
      <div className="mb-8">
        <div className="flex justify-start  items-center mb-5">
          <h3 className="text-2xl md:text-3xl py-1 text-gray-600 dark:text-white">
            关于
          </h3>
          <FaGraduationCap className=" text-4xl md:text-5xl gap-16  py-2 md:py-3 text-gray-600 dark:text-gray-400" />
        </div>

        <div className="text-md md:text-lg py-2 leading-6 text-gray-800 dark:text-gray-200 flex justify-center tracking-normal md:tracking-wider">
          <ul className="steps steps-vertical lg:steps-horizontal gap-8 md:gap-5">
            <li className="step step-success ">
              <span className="flex flex-row md:flex-col">
                <p>加拿大约克大学</p>
                <p>管理学学士</p>
              </span>
              <p className="font-semibold text-teal-600 dark:text-teal-400">
                2016
              </p>
            </li>
            <li className="step step-success">
              <span className="flex flex-row md:flex-col">
                <p>工商银行加拿大分行</p>
                <p>客户经理</p>
              </span>
              <p className="font-semibold text-teal-600 dark:text-teal-400">
                2018
              </p>
            </li>
            <li className="step step-success">
              <span className="flex flex-row md:flex-col">
                <p>工商银行加拿大分行</p>
                <p>系统管理员</p>
              </span>
              <p className="font-semibold text-teal-600 dark:text-teal-400">
                2020
              </p>
            </li>
            <li className="step step-success">
              <span className="flex flex-row md:flex-col">
                <p>Elcoud Education Inc.</p>
                <p>前端开发实习</p>
              </span>
              <p className="font-semibold text-teal-600 dark:text-teal-400">
                2021
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex  ">
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <div className="chat chat-start mb-6 md:mb-10 ">
                <div className="chat-bubble chat-bubble-info">
                  掌握哪些前端技术?
                </div>
              </div>
              <div className="chat chat-end gap-5  mr-8 md:mr-0">
                <div className="chat-bubble chat-bubble-info ">
                  <span className="font-bold">基础</span>: HTML, CSS, TypeScript
                </div>
                <div className="chat-bubble chat-bubble-info">
                  <span className="font-bold">CSS框架</span>: Tailwind CSS,
                  Chakra UI
                </div>
                <div className="chat-bubble chat-bubble-info">
                  <span className="font-bold">前端库</span>: React 18
                </div>
                <div className="chat-bubble chat-bubble-info">
                  <span className="font-bold">框架</span>: Next.js
                </div>
                <div className="chat-bubble chat-bubble-info">
                  <span className="font-bold">状态管理方案</span>: React Query,
                  Zustand
                </div>
                <div className="chat-bubble chat-bubble-info">
                  <span className="font-bold">客户端路由方案</span>: React
                  Router
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
