import React from 'react'

export default function IconSwitch(props) {
  return (
    <div className='shop__icon_container'>
      <i className="material-icons" 
        onClick={ () => props.icon === 'view_list' ? props.onSwitch('view_module') : props.onSwitch('view_list') }
      >{ props.icon === 'view_list' ? 'view_module' : 'view_list' }</i>
    </div>
  )
}