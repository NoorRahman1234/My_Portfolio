import React from "react";
import pic from "../assets/download (1).jfif";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { IoLogoNodejs, IoLogoReact } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <section
        id="home"
        className="bg-gray-50 dark:bg-gray-900 dark:text-white py-10"
      >
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
          <div className="flex flex-col-reverse md:flex-row order-2 md:order-1">
            <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 ">
              <span className="text-2xl block">Welcome to My Portfolio</span>
              <div className="flex space-x-1 font-semibold text-2xl md:text-4xl">
                <h1>Hello, I'm a</h1>
                <ReactTyped
                  className="text-cyan-500 font-bold"
                  strings={["Programmer", "Frontend", "Web Developer"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </div>
              <br />
              <p className="text-sm md:text-md text-justify">
                Hello! I'm a front end web developer skilled in HTML5, CSS3,
                Bootstrap5, Tailwind CSS, and JavaScript. I'm currently learning
                MERN stack development to build full-stack websites and
                applications. Let's build something great together!
              </p>
              {/* social media icons */}
              <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="space-y-2">
                  <h1 className="font-bold text-center mt-5">Available on</h1>
                  <ul className="flex space-x-5 justify-center">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/bismillah-khan-1a650b2b0/"
                        target="_blank"
                      >
                        <BsLinkedin className="text-2xl cursor-pointer hover:text-blue-600 rounded-md" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <FaFacebookSquare className="text-2xl cursor-pointer hover:text-blue-600" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/" target="_blank">
                        <IoLogoYoutube className="text-2xl cursor-pointer hover:text-red-600" />
                      </a>
                    </li>
                    <li>
                      <a href="https://telegram.org/" target="_blank">
                        <FaTelegram className="text-2xl cursor-pointer hover:text-blue-600" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h1 className="font-bold text-center mt-6">
                    Currently working on
                  </h1>
                  <div className="flex space-x-5 justify-center">
                    <DiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer hover:bg-black hover:text-green-600" />
                    <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer hover:bg-black hover:text-white" />
                    <IoLogoReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer hover:bg-black hover:text-blue-500" />
                    <IoLogoNodejs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer hover:bg-green-600 hover:text-black" />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:ml-10 md:mt-15 flex justify-center ">
              <img
                src={pic}
                alt=""
                className="rounded-full md:w-[400px] md:h-[400px] w-64 h-68 border-3 border-cyan-500   shadow-lg transition-transform duration-500 hover:scale-105 hover:rotate-4 "
              />
            </div>
          </div>
        </div>
      </section>
      <hr className="border-t-2 border-gray-300 dark:border-gray-700 my-4" />
    </>
  );
}

export default Home;
