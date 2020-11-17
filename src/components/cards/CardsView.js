import React from 'react'
import ShopCard from './ShopCard'
import './CardsView.css'

export default function CardsView(props) {
  console.log(props);
  return (
    <div className='shop__cards_view'>
      { props.cards.map((card, index) => <ShopCard card={ card } key={ index } />) }
    </div>
  )
}