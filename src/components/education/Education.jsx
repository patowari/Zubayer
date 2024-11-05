import React from "react";
import "./Education.css";
import fbic from "../../assets/fbic.jpg"



const Education = () => {
  return (
    <section id="education" className="education">

      <h5>My Academic Journey</h5>
      <h2>Education</h2>
      
      <div className="education-item">
        <img src={fbic} alt="College Logo" />
        <div className="education-details">
          <h3>Secondary School Certificate (SSC)</h3>
          <p className="institution">Tejgaon Govt. High School (TGHS)</p>
          <p className="duration">2024 - 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
