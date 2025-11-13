import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <>
      <section id="contact" className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-screen-2xl container mx-auto px-6 md:px-16 lg:px-20">
          <h1 className="text-4xl md:text-5xl font-bold mt-10 text-center mb-10 text-gray-800 dark:text-gray-200">
            Contact <span className="text-cyan-500">Info</span>
          </h1>

          <div className="flex flex-wrap justify-center md:justify-between gap-6 items-center w-full">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow-lg dark:shadow-gray-700 rounded-2xl overflow-hidden px-10 py-6 flex flex-col items-center w-80 transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-600">
              <FaLocationDot size={50} className="text-cyan-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center mb-2">
                Location
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Peshawar, Pakistan
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow-lg dark:shadow-gray-700 rounded-2xl overflow-hidden px-10 py-6 flex flex-col items-center w-80 transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-600">
              <FaWhatsapp size={50} className="text-cyan-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center mb-2">
                Whatsapp
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                +923129432684
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow-lg dark:shadow-gray-700 rounded-2xl overflow-hidden px-10 py-6 flex flex-col items-center w-80 transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-600">
              <MdOutlineMailOutline size={50} className="text-cyan-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center mb-2">
                Email Address
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                rahmanafr0123@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
