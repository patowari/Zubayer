import React from "react";
import "./About.css";
import ME from "../../assets/ABOUT.jpeg";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <p>
          I am Md. Zubayer Hossain Patowari, an AI Engineer and Full-Stack Developer passionate about building intelligent
          solutions that make a real-world impact. With hands-on experience in natural language processing (NLP), machine learning, 
          computer vision and generative AI, I specialize in developing AI-powered chatbots, automation tools, and innovative applications.
          </p>
          <br />

          <p>
          I am currently a Co-founder & COO at Softoryze, where I drive the development of cutting-edge AI 
          and software solutions. Previously, I worked as an AI Developer at Rootsuptech, designing and optimizing 
          multilingual generative AI chatbots. I also contributed to projects like BanglaGPT, an AI-powered chatbot 
          assisting call center agents under the Directorate General of Family Planning (DGFP), Bangladesh.
          </p>
          <p>
          Beyond AI, I have expertise in full-stack web development, utilizing technologies like React.js, Node.js, Django, 
          and FastAPI to build scalable applications. My projects span healthcare AI solutions to game development, including 
          my Unity-based game Anihilitor, which has exceeded 7,000 downloads.
          </p>
          <br />

          <p>
          With a strong problem-solving mindset, I actively participate in coding competitions 
          and explore emerging technologies to push the boundaries of AI and software development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
