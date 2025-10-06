import React from "react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  category,
  onAddToCart,
}) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        transition: "all 0.3s ease",
        width: "200px",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "130px",
          height: "130px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "12px",
        }}
      />
      <h3
        style={{
          fontSize: "18px",
          fontWeight: 600,
          marginBottom: "4px",
        }}
      >
        {name}
      </h3>
      <p
        style={{
          color: "#666",
          fontSize: "14px",
          marginBottom: "4px",
        }}
      >
        {category}
      </p>
      <p
        style={{
          color: "green",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        ${price}
      </p>
      <button
        onClick={onAddToCart}
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "8px 12px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontWeight: 500,
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) =>
          ((e.target as HTMLButtonElement).style.backgroundColor = "#1e40af")
        }
        onMouseOut={(e) =>
          ((e.target as HTMLButtonElement).style.backgroundColor = "#2563eb")
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
