import React from 'react'
import ShopItem from './ShopItem'
import './ListView.css'

export default function ListView(props) {
  console.log(props);
  return (
    <div className="shop__list_view">
      { props.items.map((item, index) => <ShopItem item={ item } key={ index }/>) }
    </div>
  )
}