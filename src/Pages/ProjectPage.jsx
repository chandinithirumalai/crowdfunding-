import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
// import PledgeForm from "../components/PledgeForm/PledgeForm";



function ProjectPage() {

    //State 
    const [project, setProject] = useState ({pledges:[]});

    //Hooks 
    const { id } = useParams();

    //Effects 
    useEffect(()=> {
        fetch(`${import.meta.env.VITE_API_URL
        }projects/${id}`).then((results)=> {
            return results.json();
        })

        .then((data) => {
            setProject(data);
        });
    },[]);



  return (
    <div>
      <h2>{project.title}</h2>
      <h3>Created at: {project.date_created}</h3>
      <h3>{`Status: ${project.is_open}`}</h3>
      <h3>Pledges:</h3>
      <ul>
        {project.pledges.map((pledgeData, key) => {
          return (
            <li key={key}>
              {pledgeData.amount} from {pledgeData.supporter}
            </li>
          );
        })}
      </ul>
    
    </div>
  );
}

export default ProjectPage;