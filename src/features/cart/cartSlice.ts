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
       const exitingItem =state.items.find(item => item.id === action.payload.id);
       if(exitingItem){
        exitingItem.quantity += action.payload.quantity

       }else{
        state.items.push(action.payload)
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
export const { addToCart, removeFromCart, clearCart } = CartSlice.actions

export default CartSlice.reducer
