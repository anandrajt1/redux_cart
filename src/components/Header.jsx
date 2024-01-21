import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Header() {
  const cartItems=useSelector(state=>state.cart.items)
  
  return (
    <>
    <div className='h-24  bg-gradient-to-r from-cyan-500 to-blue-900 px-6 shadow-sm md:shadow-lg '>

       <div className='max-w-screen-lg mx-auto flex flex-row items-center justify-between px-6  h-24 text-white'>
       <div>
            <h2 className='font-semibold md:text-3xl'>ReduxCart</h2>
        </div>
        <div className='relative'>
        <FaShoppingCart className='size-10 ' />
        
              <span  className='absolute  bottom-8 left-8 bg-pink-500  text-sm font-bold w-6 h-6 flex flex-row items-center justify-center rounded-lg'>{cartItems.length} </span>

           
       
        </div>
       </div>
        
    </div>
    </>
  )
}

export default Header