import React from 'react'

export default function ShopItem(props) {
  console.log(props);
  return (
    <div className='shop__item'>{ props.item.name }</div>
  )
}