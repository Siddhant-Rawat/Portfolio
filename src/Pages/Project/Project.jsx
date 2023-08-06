import "./Project.scss";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import FbClone from "../../assets/Fb-Clone.png";
import Ecommerce from "../../assets/Ecommerce.png";
import UserManagement from "../../assets/User-Management.png";
import FitClub from "../../assets/FitClub.png";
import Spotify from "../../assets/Spotify-Clone.png";
import Game from "../../assets/Game.png";
import Tic from "../../assets/Tic.png";
import Rock from "../../assets/Rock.png";
import LinkedIn from "../../assets/LinkedIn.png";
import WeatherApp from "../../assets/WeatherApp.png";

const Project = () => {
  return (
    <>
      <h2 className="project_heading">Projects</h2>

      <p className="project">Major Projects</p>

      <div className="project_major">
        <ProjectCard
          title="Facebook Clone"
          img={FbClone}
          desc="A Facbook Clone built using React and Firebase. It has features such as Creating a Post and Group Chat."
          github="https://github.com/Siddhant-Rawat/Facebook-clone"
          live="https://fb-clone-siddhant-rawat.netlify.app/"
        />
        <ProjectCard
          title="E-Commerce Application"
          img={Ecommerce}
          desc="Built using React, this e-commerce application has a variety of products to choose from. Gets the data from an API."
          github="https://github.com/Siddhant-Rawat/Siddhant-Rawat-Ecommerce"
          live="https://ecommerce-siddhant-rawat.netlify.app/"
        />
        <ProjectCard
          title="User Management System"
          img={UserManagement}
          desc="Application for managing data of users, built using React and Spring Boot. Deployed on AWS EC2 instance"
          github="https://github.com/Siddhant-Rawat/User-Management-System-Backend"
          live="http://16.170.196.198:8080/"
        />
        <ProjectCard
          title="FitClub"
          img={FitClub}
          desc="A Gym Website developed using React. It has a modern user interface with animations."
          github="https://github.com/Siddhant-Rawat/FitClub"
          live="https://siddhant-rawat-fitclub.pages.dev/"
        />
      </div>

      <p className="project">Minor Projects</p>

      <div className="project_minor">
        <ProjectCard
          title="Spotify Clone"
          img={Spotify}
          desc="A Spotify Clone developed using HTML, CSS and JavaScript."
          github="https://github.com/Siddhant-Rawat/SpotifyClone.github.io"
          live="https://siddhant-rawat.github.io/SpotifyClone.github.io/"
        />
        <ProjectCard
          title="Simple Game"
          img={Game}
          desc="A simple game developed using JavaScript and HTML Canvas."
          github="https://github.com/Siddhant-Rawat/Game-Js.github.io"
          live="https://siddhant-rawat.github.io/Game-Js.github.io/"
        />
        <ProjectCard
          title="Tic Tac Toe"
          img={Tic}
          desc="A simple Tic-Tac-Toe game built using HTML, CSS, JavaScript."
          github="https://github.com/Siddhant-Rawat/Tic-Tac-Toe.github.io"
          live="https://siddhant-rawat.github.io/Tic-Tac-Toe.github.io/"
        />
        <ProjectCard
          title="Rock Paper Scissors"
          img={Rock}
          desc="A Rock-Paper-Scissors game built using HTML, CSS, JavaScript."
          github="https://github.com/Siddhant-Rawat/Rock-Paper-Scissors.github.io"
          live="https://siddhant-rawat.github.io/Rock-Paper-Scissors.github.io/"
        />
        <ProjectCard
          title="LinkedIn Clone"
          img={LinkedIn}
          desc="A LinkedIn Clone developed using HTML, CSS and JavaScript."
          github="https://github.com/Siddhant-Rawat/LinkedIn"
          live="https://siddhant-rawat.github.io/LinkedIn/"
        />
        <ProjectCard
          title="Weather App"
          img={WeatherApp}
          desc="Built using HTML, CSS, JS and an API(by WeatherBit) from RapidAPI"
          github="https://github.com/Siddhant-Rawat/WeatherApp"
          live="https://siddhant-rawat.github.io/WeatherApp/"
        />
      </div>
    </>
  );
};

export default Project;
