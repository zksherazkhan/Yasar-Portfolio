import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import { Fade } from "react-awesome-reveal";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
