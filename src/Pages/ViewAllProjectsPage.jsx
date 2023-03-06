import { useState, useEffect } from "react";

function ViewAllProjectsPage() {

    //State 
    const [projectList, setProjectList] = useState([]);

    //Effects 
    useEffect(()=> {
        fetch(`${import.meta.env.VITE_API_URL
        }projects`).then((results)=> {
            return results.json();
        })

        .then((data) => {
            setProjectList(data);
        });
    },[]);

    return (
        <h1> Projects List</h1>
    
    );

    

};  

export default ViewAllProjectsPage;

