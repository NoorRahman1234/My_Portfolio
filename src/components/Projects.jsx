import React from "react";
import Pimg from "../assets/p3.webp";

function Projects() {
  return (
    <>
      <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-screen-2xl container mx-auto px-6 md:px-16 lg:px-20 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 text-center mb-12">
              My <span className="text-cyan-500">Projects</span>
            </h2>

            <div className="space-y-20">
              {/* Project 1 */}
              <div className="flex flex-wrap md:flex-nowrap gap-8 items-center">
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    E-Commerce Website
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A fully responsive e-commerce website built with React and
                    Tailwind CSS, featuring product listings, a shopping cart,
                    and user authentication.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                    <span className="bg-cyan-100 dark:bg-cyan-900 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                      React
                    </span>
                    <span className="bg-cyan-100 dark:bg-cyan-900 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                      Tailwind CSS
                    </span>
                    <span className="bg-cyan-100 dark:bg-cyan-900 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                      Firebase
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-block bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition duration-300"
                  >
                    View Project
                  </a>
                </div>
                {/* Project Image */}
                <div className="md:w-1/2">
                  <img
                    src={Pimg}
                    alt="Project 1"
                    className="w-full h-auto rounded-lg shadow-md dark:shadow-gray-700"
                  />
                </div>
              </div>

              {/* Project 2 */}
              <div className="flex flex-wrap md:flex-nowrap gap-8 items-center md:flex-row-reverse">
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    Blog Platform
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A full-stack blog platform built with Next.js, Tailwind CSS,
                    and Sanity CMS. It allows users to create, read, update, and
                    delete blog posts, with a rich text editor and image upload
                    support.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                    <span className="bg-cyan-100 dark:bg-cyan-900 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                      Next.js
                    </span>
                    <span className="bg-cyan-100 dark:bg-cyan-900 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                      Tailwind CSS
                    </span>
                    <span className="bg-cyan-100 dark:bg-cyan-900 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                      Framer Motion
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-block bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition duration-300"
                  >
                    View Project
                  </a>
                </div>
                {/* Project Image */}
                <div className="md:w-1/2">
                  <img
                    src={Pimg}
                    alt="Project 2"
                    className="w-full h-auto rounded-lg shadow-md dark:shadow-gray-700"
                  />
                </div>
              </div>

              {/* Project 3 */}
              <div className="flex flex-wrap md:flex-nowrap gap-8 items-center">
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    Task Management App
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A task management application built with React and Redux,
                    allowing users to create, update, and delete tasks with a
                    clean and intuitive UI.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                    <span className="bg-cyan-100 dark:bg-cyan-900 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                      React
                    </span>
                    <span className="bg-cyan-100 dark:bg-cyan-900 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                      Redux
                    </span>
                    <span className="bg-cyan-100 dark:bg-cyan-900 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                      Material-UI
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-block bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition duration-300"
                  >
                    View Project
                  </a>
                </div>
                {/* Project Image */}
                <div className="md:w-1/2">
                  <img
                    src={Pimg}
                    alt="Project 3"
                    className="w-full h-auto rounded-lg shadow-md dark:shadow-gray-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-gray-300 dark:border-gray-700 my-4" />
    </>
  );
}

export default Projects;
