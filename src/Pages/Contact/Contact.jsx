import "./Contact.scss";
import Hands from "../../assets/Hands.jpg";
import Location from "../../assets/Location.svg";
import Email from "../../assets/email.svg";
import Leetcode from "../../assets/leetcode.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import { useEffect, useState } from "react";

const Contact = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // From formspree website
  //  If you want your form cleared after submission so that if users click the "Go Back"
  // link the content is removed add the following Javascript to your site.
  useEffect(() => {
    window.onbeforeunload = () => {
      for (const form of document.getElementsByTagName("form")) {
        form.reset();
      }
    };
  });

  // const handleSubmit = (e) => {

  // console.log(message);
  // e.preventDefault();

  // setUserName("");
  // setEmail("");
  // setSubject("");
  // setMessage("");
  // }

  // const [success, setSuccess] = useState("");
  // const [error, setError] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (username === "") {
  //     setError("Name is required!");
  //   } else if (email === "") {
  //     setError("Email is required!");
  //   } else if (subject === "") {
  //     setError("Subject is required!");
  //   } else if (message === "") {
  //     setError("Message is required!");
  //   } else {
  //     setSuccess(`Thanks ${username}, your message has been sent successfully`);
  //     setError("");
  //     setMessage("");
  //     setSubject("");
  //     setEmail("");
  //     setUserName("");
  //   }
  // };

  return (
    <>
      <h2 className="heading">Contact Me</h2>

      <div className="contact_details">
        <div className="details_left">
          <div className="left_image">
            <img src={Hands} alt="Hand Shake" />
          </div>

          <div className="left_data">
            <div className="data_header">
              <h3 style={{ marginBottom: "0.2rem", fontWeight: 550 }}>
                Siddhant Rawat
              </h3>
              <p>FrontEnd Developer</p>
            </div>

            <div className="data_details">
              <p>
                <u>GET IN TOUCH</u>
              </p>
              <div className="details_location">
                <img
                  src={Location}
                  alt="location"
                  style={{ width: "1.5rem" }}
                />
                <p>Dehradun, India</p>
              </div>
              <div className="details_email">
                <img src={Email} alt="email" style={{ width: "1.5rem" }} />
                <a href="mailto:rawatsiddhant72@gmail.com">
                  rawatsiddhant72@gmail.com
                </a>
              </div>
            </div>

            <div className="data_links">
              <p>
                <u>FIND ME ON</u>
              </p>
              <div className="links_social">
                <a href="https://github.com/Siddhant-Rawat" target="_blank">
                  <img
                    src={Github}
                    alt="Location"
                    style={{ width: "2rem" }}
                  />
                </a>
                <a href="https://www.linkedin.com/in/siddhant-rawat/" target="_blank">
                  <img
                    src={LinkedIn}
                    alt="LinkedIn"
                    style={{ width: "2rem" }}
                  />
                </a>
                <a href="https://leetcode.com/rawatsiddhant72/" target="_blank">
                  <img
                    src={Leetcode}
                    alt="Leetcode"
                    style={{ width: "2rem" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="details_right">
          {
            // error && (
            //   <p
            //     style={{
            //       backgroundColor: "rgb(215, 215, 215)",
            //       color: "red",
            //       padding: "0.25rem",
            //       textAlign: "center",
            //       marginTop: "0.5rem",
            //     }}
            //   >
            //     {error}
            //   </p>
            // )
          }

          {
            //   success && (
            //   <p
            //     style={{
            //       backgroundColor: "rgb(215, 215, 215)",
            //       color: "green",
            //       padding: "0.25rem",
            //       textAlign: "center",
            //       marginTop: "0.5rem",
            //     }}
            //   >
            //     {success}
            //   </p>
            // )
          }

          <form action="https://formspree.io/f/myyqkzoz" method="POST">
            <div className="right_form">
              <div className="username">
                <label htmlFor="username">Your Name:</label>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  value={username}
                  type="text"
                  placeholder="Enter Your Name"
                  id="username"
                  name="Username"
                  autoFocus
                  required
                />
              </div>

              <div className="email">
                <label htmlFor="email">Your Email:</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Enter Your Email"
                  id="email"
                  name="Email"
                  required
                />
              </div>

              <div className="subject">
                <label htmlFor="subject">Subject:</label>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  type="text"
                  placeholder="Enter Subject"
                  id="subject"
                  name="Subject"
                  required
                />
              </div>

              <div className="message">
                <label htmlFor="message">Message:</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  cols="30"
                  rows="10"
                  placeholder="Enter Message"
                  style={{ resize: "none" }}
                  id="message"
                  name="Message"
                  required
                />
              </div>

              <button>Submit</button>
            </div>
          </form>

          {
            //   error && (
            //   <p
            //     style={{
            //       backgroundColor: "rgb(215, 215, 215)",
            //       color: "red",
            //       padding: "0.25rem",
            //       textAlign: "center",
            //       marginTop: "0.5rem",
            //     }}
            //   >
            //     {error}
            //   </p>
            // )
          }

          {
            //   success && (
            //   <p
            //     style={{
            //       backgroundColor: "rgb(215, 215, 215)",
            //       color: "green",
            //       padding: "0.25rem",
            //       textAlign: "center",
            //       marginTop: "0.5rem",
            //     }}
            //   >
            //     {success}
            //   </p>
            // )
          }
        </div>
      </div>
    </>
  );
};

export default Contact;
