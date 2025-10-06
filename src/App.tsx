
import ProductList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      <div style={{ flex: 2 }}>
        <h1> Products</h1>
        <ProductList />
      </div>

      <div style={{ flex: 1 }}>
        <h1> Cart</h1>
        <Cart />
      </div>
    </div>
  );
}

export default App;
