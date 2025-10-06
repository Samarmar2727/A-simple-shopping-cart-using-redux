import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../Store";
import { removeFromCart, clearCart } from "../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleDelete = (id: number, name: string) => {
    dispatch(removeFromCart(id));
    alert(`"${name}" has been removed from your cart.`);
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      dispatch(clearCart());
      alert("Your cart has been cleared.");
    }
  };

  return (
    <div
      style={{
        padding: "24px",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty </p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px",
                borderBottom: "1px solid #ddd",
                paddingBottom: "8px",
              }}
            >
              <div>
                <h3 style={{ fontWeight: 600 }}>{item.name}</h3>
                <p style={{ color: "#555" }}>
                  ${item.price} × {item.quantity}
                </p>
              </div>

              <div>
                <button
                  onClick={() => handleDelete(item.id, item.name)}
                  style={{
                    padding: "6px 10px",
                    backgroundColor: "#dc2626",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                  onMouseOver={(e) =>
                    ((e.target as HTMLButtonElement).style.backgroundColor =
                      "#b91c1c")
                  }
                  onMouseOut={(e) =>
                    ((e.target as HTMLButtonElement).style.backgroundColor =
                      "#dc2626")
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div style={{ marginTop: "24px", borderTop: "1px solid #ddd", paddingTop: "12px" }}>
            <h3 style={{ fontWeight: "bold", fontSize: "18px" }}>
              Total: ${total.toFixed(2)}
            </h3>
            <button
              onClick={handleClear}
              style={{
                backgroundColor: "#111827",
                color: "white",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "none",
                marginTop: "12px",
                cursor: "pointer",
                fontWeight: 500,
              }}
              onMouseOver={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor =
                  "#374151")
              }
              onMouseOut={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor =
                  "#111827")
              }
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
