import React from 'react'
import { MenuList } from '../Pizzaweb/helpers/PizzaMenuList'
import MenuItem from '../Pizzaweb/helpers/PizzaMenuItem'
import "../../styles/pizzaCss/PizzaMenu.css"
import { Link } from 'react-router-dom'

function Menu() {

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant'
  });
  
  return (
    <div className='pizza-menu'>
        <h1 className='menuTitle'>Our Menu</h1>

        <div className='menuList'>
            {MenuList.map((menuItem, key) => {
                return (
                <MenuItem 
                key={key} 
                data={menuItem} />
            )})}
        </div>

        <Link to='/pizzaweb'>
        <button className='floatBttn1'>
        <i class="fa-solid fa-house" ></i>
        </button>
        </Link>
        <Link to='/pizzaweb/cart'>
        <button className='floatBttn2'>
        <i className="fa-sharp fa-solid fa-cart-shopping"></i>
        </button>
        </Link>
    </div>
  )
}

export default Menu