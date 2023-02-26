
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// Pages
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProjectPage from "./Pages/ProjectPage";
// Components
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
// CSS
import "./App.css";
import { useState } from "react";
const Layout = () => {
  const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem("token") != null)
  return (
    <>
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Outlet context={[loggedIn, setLoggedIn]} />
      <Footer />
    </>
  );
}
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/project/:id", element: <ProjectPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;