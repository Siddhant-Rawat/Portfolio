import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Project from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const navLinks = document.querySelectorAll("nav ul li");
    const indicator = document.querySelector("nav .indicator");
    // const profile = document.querySelector(".profile");
    const pages = document.querySelectorAll(".page");

    function handleScroll() {
      for (let i = 0; i < pages.length; i++) {
        let currentPage = pages[i];

        let pageTop = currentPage.getBoundingClientRect().top;
        // console.log(pageTop);

        if (pageTop < 300) {
          let width = navLinks[i].offsetWidth,
            left = navLinks[i].offsetLeft;

          indicator.style.width = `${width + 16}px`;
          indicator.style.left = left + "px";
        }
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <div className="page" id="home">
          <Home />
        </div>

        <div className="page" id="about">
          <About />
        </div>

        <div className="page" id="projects">
          <Project />
        </div>

        <div className="page" id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
