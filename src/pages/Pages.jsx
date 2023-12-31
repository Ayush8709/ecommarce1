import React from 'react'
import Home from '../component/mainpage/Home'
import FlashDeals from '../component/flashDeals/FlashDeals'
import TopCate from '../component/top/TopCate'
import NewArrivals from '../component/newarrivals/NewArrivals'
import Discount from '../component/discount/Discount'
import Shop from '../component/shop/Shop'
import Annu from '../component/annocuments/Annu'
import Wrapper from '../component/wrapper/Wrapper'

const Pages = ({productItems,cartItem,addToCart,shopItems}) => {
  return (
  <>
    <Home cartItem={cartItem}/>
    <FlashDeals productItems={productItems} addToCart ={addToCart}/>
    <TopCate />
    <NewArrivals />
    <Discount />
    <Shop shopItems={shopItems} addToCart ={addToCart}/>
    <Annu />
    <Wrapper />
  </>
  )
}

export default Pages
