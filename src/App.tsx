import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { selectProduct } from "./core/redux/features/products/productsSlice";
import { getProducts } from "./core/redux/features/products/productThunks";
import { AppDispatch } from "./core/redux/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(selectProduct);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading....</p>}
      {error && <p>Error</p>}
      {products.map((i) => (
        <div key={i.id} style={{ width: "200px", height: "auto", backgroundColor: "red" }}>
          <h2>{i.title}</h2>
          <h3>{i.description}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
