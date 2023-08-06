import { useState } from "react";
import Card from "../../Components/FlowCard/Card";
import "./About.scss";
import java from "../../assets/java.svg";
import javascript from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import html5 from "../../assets/html-5.svg";
import css3 from "../../assets/css-3.svg";
import bootstrap from "../../assets/bootstrap-4.svg";
import sass from "../../assets/sass.svg";
import redux from "../../assets/redux.svg";
import reactrouter from "../../assets/react-router.svg";
import spring from "../../assets/spring.svg";
import hibernate from "../../assets/hibernate.svg";
import mysql from "../../assets/mysql.svg";
import git from "../../assets/git.svg";
import vscode from "../../assets/vs-code.svg";
import intellij from "../../assets/intellij-idea.svg";

const About = () => {
  const [isEducation, setIsEducation] = useState(true);

  return (
    <>
      <h2 className="heading">About Me</h2>
      <div className="about">
        <div className="flow">
          <div className="flow_btn">
            <button
              className={isEducation ? "active" : "not-active"}
              // style={{
              //   // backgroundColor: isEducation ? "#22267D" : "white",
              //   // color: isEducation ? "white" : "#22267D",
              // }}
              onClick={() => setIsEducation(true)}
            >
              Education
            </button>
            <button
              className={isEducation ? "not-active" : "active"}
              // style={{
              //   // backgroundColor: isEducation ? "white" : "#22267D",
              //   // color: isEducation ? "#22267D" : "white",
              //   // outline: isEducation ? "none" : "2px solid red",
              // }}
              onClick={() => setIsEducation(false)}
            >
              Experience
            </button>
          </div>
          {isEducation ? (
            <>
              <Card
                title="B.Tech, Computer Science"
                subTitle="DIT University (2019 - 23)"
                result="7.92 CGPA"
              />
              <Card
                title="XII"
                subTitle="Ann Mary School (2018 - 19)"
                result="80.20%"
              />
              <Card
                title="X"
                subTitle="Ann Mary School (2016 - 17)"
                result="86.17%"
              />
            </>
          ) : (
            <>
              <Card
                title="Virtusa Intern"
                subTitle="Vitusa (May 2023 - July 2023)"
                description="Built project using Java Full Stack Technology and React."
                result="3 Months"
              />
              <Card
                title="Commondove Intern"
                subTitle="Commondove (Nov 2019 - Feb 2020)"
                description="Research Intern."
                result="4 Months"
              />
            </>
          )}
        </div>

        <div className="info">
          <p style={{ fontSize: "x-large" }}>Skills</p>

          <div className="skills">
            <div className="skill">
              <p>Programming Languages:</p>
              <img
                title="Javascript"
                src={javascript}
                style={{ width: "3rem" }}
              />
              <img title="Java" src={java} style={{ width: "3rem" }} />
            </div>
            <div className="skill">
              <p>FrontEnd:</p>
              <img title="React.js" src={react} style={{ width: "3rem" }} />
              <img title="HTML" src={html5} style={{ width: "3rem" }} />
              <img title="CSS" src={css3} style={{ width: "3rem" }} />
              <img
                title="Bootstrap"
                src={bootstrap}
                style={{ width: "3rem" }}
              />
              <img title="SASS" src={sass} style={{ width: "3rem" }} />
            </div>
            <div className="skill">
              <p>BackEnd:</p>
              <img title="SpringBoot" src={spring} style={{ width: "3rem" }} />
              <img
                title="Hibernate"
                src={hibernate}
                style={{ width: "3rem" }}
              />
            </div>
            <div className="skill">
              <p>Libraries:</p>
              <img
                title="React Router"
                src={reactrouter}
                style={{ width: "4rem" }}
              />
              <img title="Redux" src={redux} style={{ width: "3rem" }} />
            </div>
            <div className="skill">
              <p>Database:</p>
              <img title="MySQL" src={mysql} style={{ width: "3rem" }} />
            </div>
            <div className="skill">
              <p>Developer Tools:</p>
              <img title="Git" src={git} style={{ width: "3rem" }} />
              <img title="VS Code" src={vscode} style={{ width: "3rem" }} />
              <img
                title="IntelliJ IDEA"
                src={intellij}
                style={{ width: "3rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
