import React from 'react'
import '../../styles/pizzaCss/PizzaCheckout.css'
import '../../styles/pizzaCss/PizzaAbout.css'
import PizzaLoader from '../../assets/pizza/pizza-loading.gif'
import { Link } from 'react-router-dom'

function PizzaCheckout() {


  return (
    <div className='pizza-checkoutPage'>
        <div className="checkout-message">
            <h3>Your Order is Placed Successfully !!</h3>
            <p >We are preparing your order. </p>
            <img className='pizza-loader' src={PizzaLoader} alt="" />
        </div>

        <Link to='/pizzaweb'>
        <button className='floatBttn3'>
        <i class="fa-solid fa-house" ></i>
        </button>
        </Link>
    </div>
  )
}

export default PizzaCheckout