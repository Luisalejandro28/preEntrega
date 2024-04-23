import ProductCard from "../../common/productCard/ProductCard";

const ItemsList = ({ items, error }) => {
  {
    items.map(({ id, nombre, descripcion, precio, imagen }) => {
      return (
        <ProductCard
          key={id}
          nombre={nombre}
          descripcion={descripcion}
          precio={precio}
          imagen={imagen}
          id={id}
        />
      );
    });
    {
      error && <h4>{error.message}</h4>;
    }
  }
};

export default ItemsList;
