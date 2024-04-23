import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
//import "./NavBar.css";

export const NavBar = () => {
  return (
    <div>
      <>
        <link to="/">LOGO</link>
        <div>
          <ul>
            <Link to="/">Productos</Link>
            <Link to="/categoria/Camisas">Camisas</Link>
            <link to="/categoria/Pantalones">Pantalones</link>
            <link to="/categorias/Abrigos">Abrigos</link>
            <link to="/categoria/Zapatos">Zapatos</link>
          </ul>

          <CartWidget />
        </div>
      </>
    </div>
  );
};
