import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartItem } from '../components/CartItem';

const Cart = () => {

   const {cart} = useSelector((state) => state);
   const [totalAmount, setTotalAmount] = useState(0);
   
   //console.log(cart);
   useEffect( () => {
    setTotalAmount(cart.reduce( (acc, curr) => acc + curr.price, 0));
   }, [cart])

  return (
    <div className='flex flex-wrap justify-center items-center'>
        {
            cart.length > 0 ?
            (<div className='flex gap-10'>

              <div>
              {
                cart.map((item, index) => {
                    return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
              </div>

            <div className='flex flex-col flex-wrap justify-start gap-60  mt-10 pt-3'>
               <div>
                  <div className='text-green-600 font-semibold'>Your Cart</div>
                  <div className='text-green-600 text-[20px] uppercase font-bold'>Summary</div>
                  <p>
                    <span className='font-semibold'>Total Items: {cart.length}</span>
                  </p>
               </div>

               <div>
                <p className='font-semibold mb-1 text-[13px]'>Total Amount:<span className='font-bold'>${totalAmount}</span></p>
                <button className='w-[200px] h-[40px] text-[15px] rounded-lg text-white font-bold bg-green-600'>
                    CheckOut Now
                </button>
               </div>

            </div>


            </div>) :
            (<div className='flex flex-col flex-wrap gap-2 items-center mt-[35vh]'>
               <h1 className='font-semibold text-[20px]'>Cart Empty</h1> 
               <Link to={"/"}>
                  <button className='w-[200px] h-[40px] text-[15px] font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition ease-in'>
                     Shop Now
                  </button>
               </Link>
            </div>)
        }
    </div>
  )
}

export default Cart;
