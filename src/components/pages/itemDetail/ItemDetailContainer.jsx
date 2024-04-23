import { products } from "../../../productsMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log(id);
  const [item, setItems] = useState({});
  useEffect(() => {
    let itemFound = products.find((products) => products.id === +id);
    const getProduct = new Promise((resolve, reject) => {
      resolve(itemFound);
    });
    getProduct.then((res) => setItems(res));
  }),
    [id];
  console.log(item);
  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
