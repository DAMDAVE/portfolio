import "./App.css";
import { useEffect, useRef, useState } from "react";

//navigation imports//
import pageHome from "./Images/pageHome.svg";
import pageHomeDark from "./Images/pageHomeDark.svg";
import pageAbout from "./Images/pageAbout.svg";
import pageAboutDark from "./Images/pageAboutDark.svg";
import pageSkills from "./Images/pageSkills.svg";
import pageSkillsDark from "./Images/pageSkillsDark.svg";
import pageContact from "./Images/pageContact.svg";
import pageContactDark from "./Images/pageContactDark.svg";

// home page imports //
import discord from "./Images/discordIcon.svg";
import github from "./Images/githubIcon.svg";
import mail from "./Images/mailIcon.svg";
import mypic from "./Images/my-Image.jpg";
import location from "./Images/locationIcon.svg";
import jobschedule from "./Images/jobScheduleIcon.svg";
import download from "./Images/downloadIcon.svg";
import wablue from "./Images/wablue.svg";

// about page imports //
import mouse from "./Images/mouseIcon.svg";
import ide from "./Images/ide.svg";

//skills page imports//
import code from "./Images/codeIcon.svg";
import line from "./Images/lineIcon.svg";
import web from "./Images/webdevIcon.svg";
import app from "./Images/appdevIcon.svg";
import html from "./Images/htmlIcon.svg";
import css from "./Images/cssIcon.svg";
import js from "./Images/jsIcon.svg";
import react from "./Images/reactIcon.svg";

//contact page imports//
import send from "./Images/sendIcon.svg";
import whatsapp from "./Images/whatsappIcon.svg";
import discorddark from "./Images/discorddark.svg";
import githubdark from "./Images/githubdark.svg";

function App() {
  const date = new Date();
  const year = date.getFullYear();
  const Appref = useRef(null);
  const [page, setPage] = useState(1);
  const [formstatus, setFormStatus] = useState("");
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const navtoGitHub = () => {
    window.open("https://github.com/DAMDAVE", "_blank");
  };
  const navtoDiscord = () => {
    window.open("https://discord.com/users/damthedave", "_blank");
  };
  const navtoWhatsapp = () => {
    window.open("https://wa.me/+2348148774367", "_blank");
  };
  const DownloadCV = () => {
    const url = "./Document/OMOYAJOWO DAVID CV.pdf";

    const a = document.createElement("a");
    a.href = url;
    a.download = "OMOYAJOWO DAVID CV.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  const getIsFormValid = () => {
    if (
      (state.name !== "") &
      (state.name !== null) &
      (validateEmail(state.email) === true) &
      (state.message !== "") &
      (state.message !== null)
    ) {
      return true;
    } else return false;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://turkish-palate.onrender.com/api/v1/contact_me",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(state),
        }
      );

      if (response.ok) {
        setFormStatus("Message sent successfully!");
        setState({ name: "", email: "", message: "" });
        setTimeout(() => {
          setFormStatus("");
        }, 5000);
      } else {
        setFormStatus("Failed to send message. Please try again.");
        setTimeout(() => {
          setFormStatus("");
        }, 5000);
      }
    } catch (error) {
      setFormStatus("An error occurred. Please try again.");
      setTimeout(() => {
        setFormStatus("");
      }, 5000);
      return;
    }
  };
  useEffect(() => {
    const scrollToPage = (pageNumber) => {
      if (Appref.current) {
        const pageHeight = window.innerHeight; // height of the viewport
        Appref.current.scrollTo({
          top: (pageNumber - 1) * pageHeight,
          behavior: "smooth",
        });
      }
    };

    scrollToPage(page);
  }, [page]);

  return (
    <div className="App" ref={Appref}>
      <div className="Nav">
        <div className="container">
          <button
            className={page === 1 ? "bt-active" : ""}
            onClick={() => {
              setPage(1);
            }}
          >
            <span>Home</span>
            <img src={page === 1 ? pageHomeDark : pageHome} alt="Home" />
          </button>
          <button
            className={page === 2 ? "bt-active" : ""}
            onClick={() => {
              setPage(2);
            }}
          >
            <span>About</span>
            <img src={page === 2 ? pageAboutDark : pageAbout} alt="About" />
          </button>
          <button
            className={page === 3 ? "bt-active" : ""}
            onClick={() => {
              setPage(3);
            }}
          >
            <span>Skills</span>
            <img src={page === 3 ? pageSkillsDark : pageSkills} alt="Skills" />
          </button>
          <button
            className={page === 4 ? "bt-active" : ""}
            onClick={() => {
              setPage(4);
            }}
          >
            <span>Contact</span>
            <img
              src={page === 4 ? pageContactDark : pageContact}
              alt="Contact"
            />
          </button>
        </div>
      </div>
      <div className="Home">
        <header>
          <div className="codename">
            <span>&lt;C/&gt;</span> David Omoyajowo
          </div>

          <nav>
            <button className="bt-github" onClick={navtoWhatsapp}>
              <div>
                <img src={wablue} alt="whatsapp" />
              </div>
              <p>WhatsApp </p>
            </button>
            <button className="bt-github" onClick={navtoDiscord}>
              <div>
                <img src={discord} alt="discord" />
              </div>
              <p>Discord </p>
            </button>
            <button className="bt-github" onClick={navtoGitHub}>
              <div>
                <img src={github} alt="github" />
              </div>
              <p>GitHub</p>
            </button>
          </nav>
        </header>

        <div className="bd-home">
          <main>
            <h1>Developer</h1>
            <div className="section">
              <div className="profile">
                <div className="pf-contain">
                  <div className="pct">
                    <div className="pct-div">
                      <img src={mypic} alt="Omoyajowo David" />
                    </div>
                    <h1>David</h1>
                    <p>Front-End Developer</p>
                  </div>
                  <div className="pf-info">
                    <section>
                      <img src={mail} alt="email" />
                      <a
                        href="https://omoyajowodavidoyindamola@gmail.com"
                        target="blank"
                      >
                        omoyajowodavidoyindamola@gmail.com
                      </a>
                    </section>
                    <section>
                      <img src={location} alt="location" />
                      <p>Nigeria</p>
                    </section>
                    <section>
                      <img src={jobschedule} alt="schedule" />
                      <p>Part Time </p>
                    </section>
                  </div>
                  <div className="langs">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JS</span>
                    <span>REACT</span>
                  </div>
                </div>
                <button onClick={DownloadCV}>
                  <p>Download CV</p>
                  <img src={download} alt="download" />
                </button>
              </div>

              <div className="p-info">
                <div className="text">
                  <div>
                    <div className="codesnippets">&lt;h1&gt;</div>

                    <div className="par one">
                      <p>
                        Hey
                        <br />
                        I'm <span>David</span>,
                        <br />A Front-End Developer
                      </p>
                    </div>

                    <div className="codesnippets">&lt;/h1&gt;</div>

                    <div className="codesnippets">&lt;p&gt;</div>

                    <div className="par two">
                      <p>
                        My specialty; Turning your ideas into a pixel-perfect
                        reality, one line of a code at a time. Looking for a
                        developer that likes to get stuff done?👇
                      </p>
                    </div>

                    <div className="codesnippets">&lt;/p&gt;</div>

                    <div className="par three">
                      <p>Let's Talk</p>
                      <button onClick={navtoWhatsapp}>
                        <img src={mail} alt="mail" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="exp-contain">
                  <div className="section">
                    <p>4</p>
                    <span>Programming Languages</span>
                  </div>
                  <div className="section">
                    <p>9</p>
                    <span>Development Tools</span>
                  </div>
                  <div className="section">
                    <p>2</p>
                    <span>Years of Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="About">
        <div className="mouseIcon">
          <img src={mouse} alt="Mouse Icon" />
        </div>
        <aside className="abt-contain">
          <div className="abt-content">
            <div className="abt-heading">
              <h1>About Me</h1>
            </div>

            <div className="abt-text">
              <div className="codesnippets-2">&lt;p&gt;</div>
              <h3>Hello!</h3>
              <div className="txt-contain">
                <p>
                  I,m
                  <span className="txt-langs"> OMOYAJOWO DAVID OYINDAMOLA</span>
                  , a passionate web developer skilled in{" "}
                  <span className="txt-langs">HTML</span>,
                  <span className="txt-langs"> CSS</span>,
                  <span className="txt-langs"> JS</span> and
                  <span className="txt-langs"> REACT</span> with a knack for
                  crafting engaging and intuitive user experiences.
                </p>
                <p>
                  With a keen eye for design and a commitment to clean,
                  efficient code, I bring creative solutions to life.
                </p>
                <p>
                  Let's collaborate to build captivating digital experiences
                  that leave a lasting impression!
                </p>
              </div>

              <div className="codesnippets-2">&lt;p&gt;</div>
            </div>
          </div>

          <div className="abt-pic">
            <img src={ide} alt="Man writing code in IDE" />
          </div>
        </aside>
      </div>
      <div className="Skills">
        <aside className="sks-contain">
          <div className="sks-head">
            <div className="mousefrag">
              <img src={mouse} alt="Mouse Icon" />
              <img src={code} alt="Fragments Icon" />
            </div>
            <div className="sks-heading">
              <div className="sks-line">
                <h1>Skills</h1>
                <div className="img">
                  <img src={line} alt="" />
                </div>
              </div>
              <div className="sks-par">
                <p>
                  I am striving to never stop learning and to keep improving
                </p>
              </div>
            </div>
          </div>
          <main className="skillsets">
            <div className="sk-services">
              <div className="skserv">
                <div className="servdivs">
                  <img src={web} alt="" />
                  <h5>Web Development</h5>
                  <p>HTML-CSS-JS-REACT</p>
                </div>
              </div>
              <div className="skserv">
                <div className="servdivs">
                  <img src={app} alt="" />
                  <h5>App Development</h5>
                  <p>iOS-Android</p>
                </div>
              </div>
            </div>
            <div className="sk-skills">
              <div className="sk-langs html">
                <div>
                  <img src={html} alt="html" />
                </div>
                <div>
                  <h1>HTML</h1>
                </div>
              </div>

              <div className="sk-langs css">
                <div>
                  <img src={css} alt="css" />
                </div>
                <div>
                  <h1>CSS</h1>
                </div>
              </div>

              <div className="sk-langs js">
                <div>
                  <img src={js} alt="js" />
                </div>
                <div>
                  <h1> JS</h1>
                </div>
              </div>

              <div className="sk-langs react">
                <div>
                  <img src={react} alt="react" />
                </div>
                <div>
                  <h1>REACT</h1>
                </div>
              </div>
            </div>
          </main>
        </aside>
      </div>
      <div className="Contact">
        <div className="con-contain">
          <div className="con-head">
            <div className="con-mouse">
              <img src={mouse} alt="Mouse Icon" />
            </div>

            <div className="con-title">
              <div className="con-line">
                <h1>Contact</h1>
                <img src={line} alt="line" />
              </div>
              <p>I'm currently available for freelance work</p>
            </div>
          </div>
          <div className="con-foot">
            <div className="con-msg">
              <div className="con-msg-ttl">
                <h1>Send Me A Message</h1>
              </div>
              <form className="con-msg-form">
                <div className="con-top-form inputdivs top">
                  <fieldset>
                    <label>Your name *</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={state.name}
                      onChange={(e) => {
                        setState({
                          ...state,
                          name: e.target.value,
                        });
                      }}
                    />
                  </fieldset>
                  <fieldset>
                    <label>Your email *</label>
                    <input
                      type="email"
                      placeholder="Enter a valid email"
                      value={state.email}
                      onChange={(e) => {
                        setState({
                          ...state,
                          email: e.target.value,
                        });
                      }}
                    />
                  </fieldset>
                </div>
                <div className="con-down-form inputdivs down">
                  <fieldset>
                    <label>Your message *</label>
                    <input
                      type="text"
                      placeholder="Enter your needs"
                      value={state.message}
                      onChange={(e) => {
                        setState({
                          ...state,
                          message: e.target.value,
                        });
                      }}
                    />
                  </fieldset>
                </div>
              </form>
            </div>
            <button onClick={handleSubmit} disabled={!getIsFormValid()}>
              <span>Send Message</span>
              <img src={send} alt="" />
            </button>
            {formstatus && <p>{formstatus}</p>}
          </div>
        </div>
        <footer>
          <div className="copyright">
            <span>&copy; {year} DavidOmoyajowo. All rights reserved.</span>
          </div>
          <div className="terms">
            <span>Privacy Policy</span> |<span>Terms and Conditions</span>
          </div>
          <div className="socials">
            <button onClick={navtoWhatsapp}>
              <img src={whatsapp} alt="" />
            </button>
            <button onClick={navtoDiscord}>
              <img src={discorddark} alt="" />
            </button>
            <button onClick={navtoGitHub}>
              <img src={githubdark} alt="" />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
