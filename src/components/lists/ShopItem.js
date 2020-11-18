import React from 'react'
import AddToCart from '../utils/AddToCart'

export default function ShopItem(props) {
  console.log(props);
  return (
    <div className='shop__item'>
      <img src={ props.item.img } alt={ props.item.name } className='shop__item_image' />
      <span className='shop__item_name'>{ props.item.name }</span>
      <span className='shop__item_color'>{ props.item.color }</span>
      <span className='shop__item_price'>${ props.item.price }</span>
      <AddToCart />      
    </div>
  )
}