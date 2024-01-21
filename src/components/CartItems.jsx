import React from 'react'
import product1 from '../assets/sundress-1.webp'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity } from '../features/cart/cartSlice'

function CartItems() {
  const cartItems=useSelector(state=>state.cart.items)
  const dispatch=useDispatch()
  return (
    <>
    <div className='max-w-screen-lg mx-auto p-6 mt-10'>

      <h2 className=' text-2xl md:text-3xl font-semibold'>Cart Items</h2>

     <div className="CART-CONATINER grid grid-cols-1">
      {
        cartItems.map((cartItem,index)=>{
          return(
            <div key={index} className='EACH-CART-ITEM rounded-md shadow-md mt-3  p-2 flex flex-row items-center justify-start gap-4'>
           <img className='aspect-square w-32 md:w-52' src={cartItem.image} alt="" />
           <div>
             <h3 className='text-lg  font-semibold'>{cartItem.title} </h3>
             <span className='text-gray-600'>{cartItem.price} </span>
             <div className='mt-1 flex flex-row gap-x-2'>
                 <button onClick={()=>dispatch(decrementQuantity(index))} className='bg-slate-400 h-6 w-6 p-2 flex flex-row justify-center items-center'>-</button>
                 <span className='w-2 h-2'>{cartItem.quantity} </span>
                 <button onClick={()=>dispatch(incrementQuantity(index))} className='bg-slate-400 h-6 w-6 p-2 flex flex-row justify-center items-center'>+</button>
             </div>
            </div>
         </div>

          )
        })
      }

        

    </div>

    </div>
    
     </>
  )
}

export default CartItems