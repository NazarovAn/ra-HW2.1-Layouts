import React from 'react'
import AddToCart from '../utils/AddToCart'

export default function ShopCard(props) {
  return (
    <div className='shop__card' style={{backgroundImage: `url(${ props.card.img })`}}>
      <div className='card__top'>
        <h2 className='card__name'>{ props.card.name }</h2>
        <span className='card__color'>{ props.card.color }</span>
      </div>
      <div className='card__bottom'>
        <span className='card__price'>${ props.card.price }</span>
        <AddToCart />
      </div>
    </div>
  )
}