import "./Header.scss";
import logo from "../../assets/logo.png";
import Hamburger from "../../assets/menu.svg";
import { useEffect, useState } from "react";
import { usePdfContext } from "../../context/downloadPDFContext";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const { pdf } = usePdfContext();

  // For toggling elements in navbar
  const [showElements, setShowElements] = useState(false);

  // Was useful before but after I added the scroll code in App.jsx, this causes an error.
  // Read it to get an idea about the logic

  // useEffect(() => {
  // Means nav ke andar ke ul ke andar ke saare li
  //   const navLinks = document.querySelectorAll("nav ul li");
  //   const indicator = document.querySelector("nav .indicator");
  // console.log(navLinks);
  // console.log(indicator);

  //   function update() {
  //     let width = navLinks[0].offsetWidth,
  //       left = navLinks[0].offsetLeft;

  //     indicator.style.width = `${width + 16}px`;
  //     indicator.style.left = `${left}px`;
  //   }

  //   update();

  //   navLinks.forEach((link) => {
  //     link.addEventListener("click", () => {
  //       navLinks.forEach((link) => {
  //         link.classList.remove("active");
  //       });

  //       let width = link.offsetWidth,
  //         left = link.offsetLeft;

  //       indicator.style.left = left + "px";
  //       indicator.style.width = `${width + 16}px`;

  //       link.classList.add("active");
  //     });
  //   });
  // }, []);

  // Scroll to top at the beginning
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="profile_logo" />
        <h1>PORTFOLIO</h1>
      </div>

      <div>
        <nav>
          <ul className={showElements ? "showColumn" : "hideColumn"}>
            <div className="indicator"></div>

            <li className="active">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={() => setShowElements(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={() => setShowElements(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={() => setShowElements(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={() => setShowElements(false)}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="btn" onClick={() => pdf()}>
            <button>Download Resume</button>
          </div>
        </nav>

        <div
          className="hamburger"
          onClick={() => setShowElements(!showElements)}
        >
          <img
            src={Hamburger}
            alt="hamburger_menu"
            style={{
              width: "2rem",
              // background: "white",
              borderRadius: "0.3rem",
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
