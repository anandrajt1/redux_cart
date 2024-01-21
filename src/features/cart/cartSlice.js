import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
   
    addItemtoCart: (state, action) => {
      const productEntry={
        ...action.payload,
        quantity:1
      }
      state.items.push(productEntry)
    },

    decrementQuantity:(state,action)=>{
      //we get an index as action payload here-since we pass index from - btn
      state.items=state.items.map((product,index)=>{
        if(index===action.payload){
          return{...product,
            quantity:product.quantity-1}
          
        }
        return product
      })
      state.items=state.items.filter(item=>{
        if(item.quantity!==0){
          return item
        }
      })
    },

    incrementQuantity:(state,action)=>{
      state.items=state.items.map((product,index)=>{
        if(index===action.payload){
          return{...product,
            quantity:product.quantity+1}
          
        }
        return product
      })


    }
  }
})

// Action creators are generated for each case reducer function
export const {  addItemtoCart,decrementQuantity,incrementQuantity } = cartSlice.actions

export default cartSlice.reducer