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
            Hello! I’m Md Zubayer Hossain Patowari, a passionate full-stack
            developer and AI enthusiast with a deep interest in building
            intelligent systems and interactive applications. With expertise in
            Python, JavaScript, Django, Flask, TensorFlow, and advanced tools
            like Git, I enjoy solving complex problems and creating projects
            that make a real impact. One of my key achievements is developing
            BanglaGPT, a chatbot designed to understand and respond in Bangla,
            making conversational AI more accessible for native speakers.
          </p>
          <br />

          <p>
            My experience spans both frontend and backend development, working
            with frameworks like React and tools such as Git and Android Studio.
            I also have a strong foundation in game development using Unity,
            allowing me to combine creativity and technology to deliver engaging
            user experiences.
          </p>
          <p>
            In addition to my professional projects, I actively participate in
            coding competitions and contribute to open-source initiatives. I
            ranked 64th in the ICPC programming contest in Bangladesh and
            regularly engage in challenges on platforms like HackerRank. I am
            also passionate about contributing to the Google Developer
            community, particularly in open-source development, creating tools
            and frameworks that enhance the development ecosystem. I am eager to
            collaborate with Google Developer experts and the community to
            further enhance tools, improve AI systems, and explore new
            innovations in technology. I’m constantly learning and refining my
            skills in areas like advanced natural language processing and
            full-stack development, and I actively participate in coding
            competitions. Whether it's building a new application, contributing
            to open-source projects, or tackling a unique coding challenge, I am
            driven by a commitment to excellence and innovation. I look forward
            to the opportunity to contribute my skills and enthusiasm to a
            dynamic team and continue growing as a developer.
          </p>
          <br />

          <p>
            I am passionate about continuously learning new languages and
            frameworks. In today's fast-paced tech world, staying updated is
            essential for growth and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
