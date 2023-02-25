import { useState } from "react";
function LoginForm() {
    //state 
    const [credentials, setCredentials] = useState ({
        username: '',
        password:'',
    });


    //Actions | plugged into the input 
    const handleChange = (event) => {
        //target of the event which is the input, refer to the input below
        const {id, value} = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
        };

//Hooks 
    const navigate = useNavigate();

    //token is for the session and determine the permissions 
    //post data, posting creditentials to the end point and jasonfy it
    //async is used with the await 
    const postData = async () => {
        const response = await fetch(
        `${import.meta.env.VITE_API_URL}api-token-auth/`,
        {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        }
        );
        return response.json();
    };
    //saving the token to the Application -> local storage 
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            //calling the postdata field above
          const { token } = await postData();
          window.localStorage.setItem("token", token);
          navigate("/");
        }
      };
      
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={handleChange}
            placeholder="Enter username"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <button type="submit">
          Login
        </button>
      </form>
    );
  }
  export default LoginForm;