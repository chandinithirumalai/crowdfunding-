import React from "react";
import { Link } from "react-router-dom";
// import PledgeForm from "../PledgeForm/PledgeForm.";


import "./ProjectCard.css"
function ProjectCard(props) {
  const { projectData } = props;

  return (
    <div className="project-card">
      <Link to= {`/project/${projectData.id}`}>
        <img src={projectData.image} />
        <h3>{projectData.title}</h3>
      </Link>
      {/* <Link to={`/pledges/${PledgeForm}`}/> */}
    </div>
  
  );
}







export default ProjectCard;