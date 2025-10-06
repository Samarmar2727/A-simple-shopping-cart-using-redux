# 🛒 Shopping Cart App (Redux Toolkit)

## 📋 Description

A simple shopping cart application built with **React**, **TypeScript**, and **Redux Toolkit**.  
Users can browse products, add or remove items from the cart, increase or decrease item quantities, and clear all items with a single click.  
The app now uses **redux-persist** to save the cart data in **localStorage**, so the cart remains intact even after page refresh.

---

## ⚙️ Features

- 🧺 Add products to the cart
- ➕ Increase item quantity
- ➖ Decrease item quantity
- ❌ Remove a single product
- 🔄 Clear all items from the cart
- 💾 Persistent cart state using **redux-persist** (saves data in localStorage)
- 🌐 Global state management with **Redux Toolkit**

---

## 🧩 Tech Stack

- **React + TypeScript**
- **Redux Toolkit**
- **React-Redux**
- **Redux-Persist**
- **Vite**

---

## 🧠 Redux Store Overview

- **`cartSlice.ts`** → Handles all cart-related logic (**add**, **remove**, **clear**, **increase/decrease quantity**).
- **`store.ts`** → Configures the Redux store, integrates **redux-persist**, and provides it to the app using the `<Provider>` and `<PersistGate>` components.

---

## 🚀 How to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/Samarmar2727/A-simple-shopping-cart-using-redux.git
   ```
