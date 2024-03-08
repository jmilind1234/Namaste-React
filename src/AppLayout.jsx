import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import { createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};


export default AppLayout;
