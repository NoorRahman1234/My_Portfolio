import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="dark:bg-gray-900 bg-gray-50">
      <Navbar />
      <Home />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
