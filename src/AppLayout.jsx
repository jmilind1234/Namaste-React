import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import { createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";

//createBrowserRouter helps in creating routing configuration.

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<Error/>
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default AppLayout;
