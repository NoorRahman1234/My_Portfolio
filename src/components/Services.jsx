import React from "react";
import { FaCode, FaLaptopCode, FaFileCode } from "react-icons/fa6";
import { RiShoppingCartFill } from "react-icons/ri";
import { BiSolidData } from "react-icons/bi";
import { GrOptimize } from "react-icons/gr";

function Services() {
  return (
    <>
      <section id="services" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-screen-2xl container mx-auto px-6 md:px-16 lg:px-20 mt-10 mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mt-7">
            Serv<span className="text-cyan-500">i</span>ces
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {/* Card 01 */}
            <div className="bg-white dark:bg-gray-800 dark:text-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-700 dark:duration-300 shadow-lg flex flex-col items-center p-6 rounded-lg w-80">
              <FaLaptopCode size={50} className="text-cyan-500" />
              <h2 className="text-xl font-semibold mt-4">
                Responsive Web Design
              </h2>
              <p className="mt-2">
                Creating visually appealing, fully responsive websites for
                optimal user experience.
              </p>
            </div>
            {/* Card 02 */}
            <div className="bg-white dark:bg-gray-800 dark:text-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-700 shadow-lg flex flex-col items-center p-6 rounded-lg w-80">
              <FaCode size={50} className="text-cyan-500" />
              <h2 className="text-xl font-semibold mt-4">Web Development</h2>
              <p className="mt-2">
                Building high-quality, modern websites using the latest frontend
                technologies.
              </p>
            </div>
            {/* Card 03 */}
            <div className="bg-white dark:bg-gray-800 dark:text-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-700 shadow-lg flex flex-col items-center p-6 rounded-lg w-80">
              <BiSolidData size={50} className="text-cyan-500" />
              <h2 className="text-xl font-semibold mt-4">
                Single Page Applications
              </h2>
              <p className="mt-2">
                Developing fast, interactive SPAs with seamless user
                experiences.
              </p>
            </div>
            {/* Card 04 */}
            <div className="bg-white dark:bg-gray-800 dark:text-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-700 shadow-lg flex flex-col items-center p-6 rounded-lg w-80">
              <GrOptimize size={50} className="text-cyan-500" />
              <h2 className="text-xl font-semibold mt-4">
                Website Optimization
              </h2>
              <p className="mt-2">
                Enhancing performance through code optimization, caching, and
                image compression.
              </p>
            </div>
            {/* Card 05 */}
            <div className="bg-white dark:bg-gray-800 dark:text-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-700 shadow-lg flex flex-col items-center p-6 rounded-lg w-80">
              <FaFileCode size={50} className="text-cyan-500" />
              <h2 className="text-xl font-semibold mt-4">PSD/Figma to HTML</h2>
              <p className="mt-2">
                Converting design files into responsive, pixel-perfect HTML
                code.
              </p>
            </div>
            {/* Card 06 */}
            <div className="bg-white dark:bg-gray-800 dark:text-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-700 shadow-lg flex flex-col items-center p-6 rounded-lg w-80">
              <RiShoppingCartFill size={50} className="text-cyan-500" />
              <h2 className="text-xl font-semibold mt-4">
                E-commerce Development
              </h2>
              <p className="mt-2">
                Creating fully functional online stores with payment gateway
                integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-gray-300 dark:border-gray-700 my-4" />
    </>
  );
}

export default Services;
