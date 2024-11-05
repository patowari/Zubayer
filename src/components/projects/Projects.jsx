import React from "react";
import "./Projects.css";
import PI2 from "../../assets/quiz-app-emad.png";
import PI3 from "../../assets/alponayboishak.png";
import PI4 from "../../assets/event.png";
import schoolImage from "../../assets/school.png";
import giminiImage from "../../assets/gimini.png";
import numiImage from "../../assets/num.png";
import mapImage from "../../assets/map.png";
import bikashImage from "../../assets/BBIKASH.gif";
import agentImage from "../../assets/agent.png";

const Projects = () => {
  const email = "mdzubayerhossainpatowari@gmail.com";
  const password = "123456";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${text} copied to clipboard`);
    });
  };

  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div className="portfolio_item-img">
              <img src={PI3} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Alponay Boishakh</h3>
            <p className="text-sm leading-5">
              A dynamic website to dive into Bengali traditions, colorful
              festivities, and cultural delights as we embrace the spirit of
              Bengali New Year. (Freelance Project from{" "}
              <a href="https://xri.com.bd" target="_blank">
                XR Interactive
              </a>
              )
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://alponayboishakh.com"
              className="btn btn-primary !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* single Project  */}

        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top ">
            <div className="portfolio_item-img bg-white pt-2">
              <img src={PI4} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Event Supply Management</h3>
            <p className="text-sm leading-5">
              This website provide accessories for any event by Admin. If you
              are an admin you can create your client and next you can create
              event based on your client and{" "}
              <a className="tex">export an excel sheet of billing</a>.{" "}
              <button
                className="bg-slate-500"
                onClick={() => copyToClipboard(email)}
              >
                Copy {email}{" "}
              </button>{" "}
              {"   "}{" "}
              <button
                className="bg-slate-500"
                onClick={() => copyToClipboard(password)}
              >
                {" "}
                Copy {password}
              </button>
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">

            <a
              href="https://event-supply.netlify.app/"
              className="btn btn-primary !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* single Project  */}

        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div className="portfolio_item-img">
              <img src={bikashImage} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Bkash Live Concert Streaming App</h3>
            <p className="text-sm leading-5">
              This project was for Bkash ( A Bangladeshi FinTech company ) . They organize a concert where they stream that concert from this website and people can pay 10BDT through their payment system and watch the concert stream. Also this site have a admin panel from where an admin can see important information about the concert and change multiple things as need.
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://bkashsteam.com/"
              className="btn btn-primary !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Live Demo
            </a>
            <p>Source code is private for commercial issue</p>
          </div>
        </article>
        {/* single Project  */}
        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            {" "}
            <div className="portfolio_item-img">
              <img src={PI2} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Quiz App from LWS</h3>
            <p className="text-sm leading-5">
              A quiz app for learning React and Firebase. Routes are protected
              and each topic has 4 questions.
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://quiz-app-emad.netlify.app"
              className="btn btn-primary !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* single Project  */}
        {/* single Project  */}

        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div className="portfolio_item-img">
              <img src={schoolImage} alt="School Management System" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">
              A School Management System in Laravel
            </h3>
            <p className="text-sm leading-5">
              This simple school management system can handle
              class,batch,student admission , student fee management,and
              analysis student
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <p clas>Source code is private for commercial issue</p>
          </div>
        </article>
        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div className="portfolio_item-img">
              <img src={giminiImage} alt="AI Study Helping Chat-BOT" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">AI Study Helping Chat-BOT</h3>
            <p className="text-sm leading-5">
              This is a AI chatbot for educational purposes . This chatbot can
              help people by analysis a pdf book. Someone can give this AI a pdf
              book then ask anything from that pdf book the AI will answer the
              question in an organized way to help him.
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://study-chatbot.streamlit.app/"
              className="btn btn-primary !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div className="portfolio_item-img">
              <img src={numiImage} alt="AI Study Helping Chat-BOT" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Car Number Plates Detection using Python</h3>
            <p className="text-sm leading-5">
              This is a Machine Learning project by which we can detect car number Plates.
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://github.com/mdzubayerhossain/logic-with-python/tree/main/Car-Number-Plates-Detection-zubayer"
              className="btn btn-primary !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Code
            </a>
          </div>
        </article>
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div className="portfolio_item-img">
              <img src={mapImage} alt="AI Study Helping Chat-BOT" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Syngenta Event Interactive Map</h3>
            <p className="text-sm leading-5">
            This project was an interactive event location view map-based project. here admin can create as many as the event they want and show them on the map. when a user clicks on a map location it will show the event schedule of that district. This project was for Syngenta Bangladesh.
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="#"
              className=""
              target="_blank"
            >
              Source code is private for commercial issue
            </a>
          </div>
        </article>
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div className="portfolio_item-img">
              <img src={agentImage} alt="AI Study Helping Chat-BOT" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Canadian Surrogacy Agency Website Admin Dashboard</h3>
            <p className="text-sm leading-5">
              This is an admin dashboard for one of my Canadian clients. they run a surrogacy company in Canada.From this admin dashboard they can manage their website , surrogate mother, Intended Parent , also their package pricing .
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="#"
              className=""
              target="_blank"
            >
              Source code is private for commercial issue
            </a>
            
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
