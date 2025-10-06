import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductsList: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
 
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    );
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20, padding: 16 }}>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          category={item.category}
          onAddToCart={() => handleAddToCart(item)}
        />
      ))}
    </div>
  );
};

export default ProductsList;
