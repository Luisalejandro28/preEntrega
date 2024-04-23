import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemsListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} />
        <Route path="/" element={<ItemsListContainer />} />
        <Route path="/categoria/:name" element={<ItemDetailContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="*" element={"404 Error"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
