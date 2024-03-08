import { Outlet, createBrowserRouter, useLocation } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { useLocation } from "react-router-dom";

const AppLayout = () => {
  const locationData = useLocation();
  console.log("===locationData===", locationData);
  const pathName = locationData?.pathname;
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export const appRouter = new createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default AppLayout;
