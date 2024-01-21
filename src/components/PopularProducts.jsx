import React, { useState } from 'react'
import product1 from '../assets/sundress-1.webp'
import product2 from '../assets/kurti-1.webp'
import product3 from '../assets/croptop-1.webp'
import product4 from '../assets/ostshirt-1.webp'
import product5 from '../assets/shirt.webp'
import { useDispatch } from 'react-redux'
import { addItemtoCart } from '../features/cart/cartSlice'

function PopularProducts() {
    const dispatch=useDispatch()


    const[products,setProducts]=useState([
        {
            image:product1,
            title:"Casual Blue Sundress",
            price:"$29.99"
        },
        {
            image:product2,
            title:"Charm Black Kurti",
            price:"$39.99"  
        },
        {
            image:product3,
            title:"Pretty in Pink Croptop",
            price:"$29.99"  
        },
        {
            image:product4,
            title:"Classic Black T-Shirt",
            price:"$19.99"  
        },
        {
            image:product5,
            title:"Bold Red Checkered Shirt",
            price:"$29.99"  
        }

    ])
  return (
    <>
    <div className='max-w-screen-lg mx-auto p-6 mt-10'>
        <h2 className=' text-2xl md:text-3xl font-semibold '>Popular Products</h2>

        <div className='GRID-CONTAINER grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 mt-3 md:mt-6'>
            {
                products.map((product,index)=>{
                    return(
                        <div key={index} className='EACH-GRID-ITEM  p-2 rounded-md shadow-md w-60 md:w-64'>
                             <img src={product.image} className='w-full' alt="" />
                             <h3 className='text-lg font-semibold'>{product.title}</h3>
                             <div className='flex flex-row justify-between items-center mt-2'>
                                     <span className='text-gray-600'>{product.price} </span>
                                     <button onClick={()=>dispatch(addItemtoCart(product))} className='font-medium hover:brightness-110 bg-green-700 text-white p-1 md:p-2 rounded-md'>+ Add</button>
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

export default PopularProducts