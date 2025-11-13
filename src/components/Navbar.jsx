import { useState, useEffect } from "react";
import { IoMoon, IoSunny, IoMenu, IoClose } from "react-icons/io5";
import pic from "../assets/download (1).jfif";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const [menuOpen, setMenuOpen] = useState(false);

  // Apply dark mode settings
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-700 z-50 transition duration-300">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex justify-between items-center h-16">
        <div className="flex items-center">
          <img src={pic} alt="Profile" className="w-10 h-10 rounded-full" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white ml-2">
            Port<span className="text-cyan-500">folio</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-gray-700 dark:text-gray-300 font-semibold">
          {["Home", "Services", "Projects", "About", "Contact"].map((item) => (
            <li key={item} className="relative cursor-pointer group">
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-500 transition relative"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-md focus:outline-none transition duration-300"
          >
            {darkMode ? (
              <IoSunny size={24} className="text-yellow-500" />
            ) : (
              <IoMoon size={24} className="text-gray-700 dark:text-white" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none transition duration-300"
          >
            {menuOpen ? (
              <IoClose size={28} className="text-gray-700 dark:text-white" />
            ) : (
              <IoMenu size={28} className="text-gray-700 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed top-16 h-screen items-center left-0 right-0  bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-700 z-40 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <ul className="flex flex-col space-y-5 p-8 text-gray-700 dark:text-gray-300 font-semibold text-center  ">
          {["Home", "Services", "Projects", "About", "Contact"].map((item) => (
            <li key={item} className="cursor-pointer">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-cyan-500 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
