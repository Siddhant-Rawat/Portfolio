import "./Home.scss";
import Siddhant_ProfilePic from "../../assets/Siddhant_LinkedIn.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["FrontEnd Developer.", "FullStack Developer.", "Learner."],
    loop: true,
  });

  return (
    <div className="home">
      <div className="details">
        <span className="intro">Hello, I'm</span>

        <div className="name">
          <h1>Siddhant Rawat</h1>
        </div>

        <div className="subHeading">
          <h2>
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="ffffff"
            />
          </h2>
        </div>

        <div className="text">
          <p>
            Motivated young adult, have completed my Bachelor of Technology
            (CSE). Looking to apply my skills in the tech industry and solve
            real world problems in a creative manner. Passionate about coding
            and eager to gain knowledge.
          </p>
        </div>
      </div>

      <div className="profile-img">
        <img src={Siddhant_ProfilePic} alt="" />
      </div>
    </div>
  );
};

export default Home;
