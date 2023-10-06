import { Outlet } from "react-router-dom";
import Navbar from "../SharedPage/Navbar";
import Footer from "../SharedPage/Footer";

const Main = () => {
  return (
    <div className="bg-base-300">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
