import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar/NavBar.jsx";
import { Footer } from "./footer/Footer";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
