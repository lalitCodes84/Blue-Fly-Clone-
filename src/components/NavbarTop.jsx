import React from 'react'
import './NavbarTop.css'

function NavbarTop() {
  return (
  <div className='navParent'>
    {/* Navbar Top Section */}
    <div className="navTopParent">
    <div>
      < img src="https://www.bluefly.com/cdn/shop/files/BLUEFLY-LOGO-11-20.png" alt="" className='bfLogo'/>
      </div>
      <div className='topNavRightSection'>
        <img src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="Search_Icon" />
        <p>SEARCH</p>
       </div>
       <img src="https://visualpharm.com/assets/584/Gender%20Neutral%20User-595b40b85ba036ed117dd34c.svg" alt="User_Icon_img" className='cart_Icon user'/>
       <img src="https://visualpharm.com/assets/502/Hearts-595b40b75ba036ed117d620c.svg" alt="Heart_icon_img" className='cart_Icon heart'/>
       <img src="https://visualpharm.com/assets/420/Shopping%20Bag-595b40b85ba036ed117dc461.svg" alt="Shopping_bag_cart" className='cart_Icon cart'/>
      </div>
      {/* Navbar bottom Section */}
  </div>
  )
}

export default NavbarTop;