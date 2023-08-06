import "./ProjectCard.scss";
import githubLogo from "../../assets/github.svg";
import web from "../../assets/web.svg";

const ProjectCard = ({ title, img, desc, github, live }) => {
  return (
    <>
      <div className="project_card">
        <div className="card_image">
          <img src={img} alt="Logo" style={{ width: "100%" }} />
        </div>

        <div className="content">
          <div className="content_upper">
            <h3>{title}</h3>

            <div className="content_links">
              <a href={github} target="_blank">
                <img
                  src={githubLogo}
                  alt="Github link"
                  style={{ width: "1rem" }}
                />
              </a>

              <a href={live} target="_blank">
                <img
                  src={web}
                  alt="Live Website link"
                  style={{ width: "1.1rem" }}
                />
              </a>
            </div>
          </div>

          <div className="content_lower">{desc}</div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
