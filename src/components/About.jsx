import React from "react";

function About() {
  return (
    <>
      <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 text-center mb-12">
            About <span className="text-cyan-500">Me</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="md:w-1/2 space-y-6 text-center md:text-left">
              <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
                Hello, I'm{" "}
                <span className=" font-semibold">Noor Rahman</span>
                <span className="font-semibold text-cyan-500"> Afridi</span>, a
                passionate Front-End Developer dedicated to crafting beautiful,
                responsive, and user-friendly websites. I love bringing designs
                to life using modern tools like{" "}
                <span className="font-semibold">React.js</span>,{" "}
                <span className="font-semibold">Tailwind CSS</span>, and{" "}
                <span className="font-semibold">JavaScript</span>.
              </p>

              <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
                My focus is on creating seamless, high-performance web
                experiences that work across all devices. I'm currently
                expanding my skills in the{" "}
                <span className="font-semibold">MERN stack</span>
                to build full-stack applications.
              </p>

              <div>
                <a
                  href="#"
                  className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-600 transition duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right Side  */}
            <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-700 dark:text-gray-200">
              {[
                "HTML5 & CSS3",
                "JavaScript (ES6+)",
                "React.js",
                "Tailwind CSS",
                "Responsive Design",
                "Git & Version Control",
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center text-center justify-center space-x-2 bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 px-4 py-3 rounded-lg hover:shadow-lg dark:hover:shadow-gray-600 transition"
                >
                  <span className="text-cyan-500 text-xl">✔</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-gray-300 dark:border-gray-700 my-4" />
    </>
  );
}

export default About;
