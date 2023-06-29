import Image from "next/image";
import React from "react";
import { MdLaptopMac } from "react-icons/md";
import BankApp from "../public/BankApp.png";
import CarApp from "../public/CarApp.png";
import GameApp from "../public/GameApp.png";
import GymApp from "../public/GymApp.png";

const Projects = () => {
  return (
    <section className="py-5 mb-1 min-h-screen " id="project">
      <div>
        <div className="flex justify-start  items-center">
          <h3 className="text-2xl md:text-3xl py-1 text-gray-600 dark:text-white font-normal ">
            项目
          </h3>
          <MdLaptopMac className=" text-4xl md:text-6xl gap-16 py-2 md:py-3 text-gray-600 dark:text-gray-400" />
        </div>

        <div className="mt-5  tracking-wide flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-200">
            <p className="text-md md:text-xl">
              我的目标是养成良好编码习惯，能写出复用度高便于维护的高质量代码。
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col lg:flex-row lg:justify-center gap-10 md:gap-20  lg:flex-wrap mt-10 md:mt-20
  
  
  "
      >
        <div className=" flex  transition ease-in-out delay-150  hover:scale-105 duration-300 ... ">
          <a href="https://cute-lamington-e73458.netlify.app/">
            <div className="card w-84 md:w-96 bg-base-100 shadow-xl">
              <figure>
                <Image src={GameApp} alt="Game App" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Game Hub
                  <div className="badge badge-success text-gray-700">游戏</div>
                </h2>
                <p className="tracking-wide text-lg">
                  <span className="font-bold">技术栈</span>: React, Vite, React
                  Hooks, React Router, React Query, Zustand, TypeScript, Charkra
                  UI
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Github</div>
                  <div className="badge badge-outline">Demo</div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className=" flex  transition ease-in-out delay-150  hover:scale-105 duration-300 ... ">
          <a href="https://car-showcase-theta.vercel.app/">
            <div className="card w-84 md:w-96 bg-base-100 shadow-xl">
              <figure>
                <Image src={CarApp} alt="Car App" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Car Show Case
                  <div className="badge badge-success text-gray-700">汽车</div>
                </h2>
                <p className="tracking-wide text-lg">
                  <span className="font-bold">技术栈</span>: Next.js,
                  TypeScript, Tailwind CSS, Headless UI
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Github</div>
                  <div className="badge badge-outline">Demo</div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className=" flex  transition ease-in-out delay-150  hover:scale-105 duration-300 ... ">
          <a href="https://illustrious-frangollo-e600a0.netlify.app/">
            <div className="card w-84 md:w-96 bg-base-100 shadow-xl">
              <figure>
                <Image src={BankApp} alt="Bank App" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Bank Payment
                  <div className="badge badge-success text-gray-700">支付</div>
                </h2>
                <p className="tracking-wide text-lg">
                  <span className="font-bold">技术栈</span>: React, Vite,
                  JavaScript, Tailwind CSS
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Github</div>
                  <div className="badge badge-outline">Demo</div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className=" flex transition ease-in-out delay-150  hover:scale-105 duration-300 ... ">
          <a href="https://splendorous-torrone-c9e7f2.netlify.app/">
            <div className="card w-84 md:w-96 bg-base-100 shadow-xl">
              <figure>
                <Image src={GymApp} alt="Gym App" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Gym Application
                  <div className="badge badge-success text-gray-700">健身</div>
                </h2>
                <p className="tracking-wide text-lg">
                  <span className="font-bold">技术栈</span>: React, Vite, React
                  Hook Form, Framer Motion, TypeScript
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Github</div>
                  <div className="badge badge-outline">Demo</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
