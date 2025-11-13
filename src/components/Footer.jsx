import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 dark:shadow-gray-100  text-center py-6 text-gray-900 dark:text-gray-200 mt-15 shadow-lg">
      <h2 className="text-3xl md:text-4xl font-semibold m-3">
        <span className="text-cyan-500">C</span>ode
        <span className="text-cyan-500">W</span>ith
        <span className="text-cyan-500">N</span>oor
      </h2>
      <h3 className="text-2xl md:text-3xl font-light m-3">
        Your Complete Web Solution
      </h3>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://www.linkedin.com/in/noor-rahman-afridi-50b5972b4?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-cyan-400 transition duration-300"
          target="_blank"
        >
          <FaLinkedin size={35} />
        </a>
        <a
          href="#"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-cyan-400 transition duration-300"
        >
          <FaGithub size={35} />
        </a>
        <a
          href="#"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-cyan-400 transition duration-300"
        >
          <FaTelegram size={35} />
        </a>
        <a
          href="#"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-cyan-400 transition duration-300"
        >
          <FaFacebook size={35} />
        </a>
      </div>

      <p className="mt-4 text-lg md:text-xl">
        Copyright &copy; 2025 Ayubi. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
