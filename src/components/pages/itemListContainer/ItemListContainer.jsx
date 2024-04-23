import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../productsMock";
import ItemsList from "./ItemList";

const ItemListContainer = () => {
  //const useNavigate = useNavigate("/");
  const { nombre } = useParams();
  //console.log(categoria);

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const product = { products };
  useEffect(() => {
    let productFiltered = products.filter(
      (product) => product.categoria === nombre
    );

    const getProducts = new Promise((resolve, reject) => {
      let validar = true;
      if (validar) {
        resolve(nombre ? productFiltered : product);
      } else {
        reject({ statu: 400, message: "error en la busqueda" });
      }
    });
    getProducts.then(() => setItems(res)).catch((error) => setError(error));
  }, [nombre]);

  return <ItemsList items={items} error={error} />;
};
export default ItemListContainer;
