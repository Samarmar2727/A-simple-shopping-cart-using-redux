import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
    id: number;
    name:string;
    price: number;
    image:string;
    quantity:number;

}

interface CartState {
    items :CartItem []
}

const initialState: CartState = {
 items : []
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
       const existingItem =state.items.find(item => item.id === action.payload.id);
       if(existingItem){
        existingItem.quantity += action.payload.quantity

       }else{
        state.items.push(action.payload)
       }

    },

   increaseQuantity: (state, action: PayloadAction<number>) => {
  console.log("INCREASE ACTION DISPATCHED", action.payload);
  const item = state.items.find(item => item.id === action.payload);
  if (item) {
    item.quantity += 1;
  }
},

decreaseQuantity: (state, action: PayloadAction<number>) => {
  console.log("DECREASE ACTION DISPATCHED", action.payload);
  const item = state.items.find(item => item.id === action.payload);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
  } else if (item && item.quantity === 1) {
    state.items = state.items.filter(i => i.id !== action.payload);
  }
},

   removeFromCart: (state, action: PayloadAction<number>) => {
  state.items = state.items.filter(item => item.id !== action.payload);
    },

    


    clearCart: (state) => {
     state.items= []
       
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,increaseQuantity, decreaseQuantity , removeFromCart, clearCart } = CartSlice.actions

export default CartSlice.reducer
