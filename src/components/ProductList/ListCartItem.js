import React from 'react';

function ListCartItem(props) {

  return (
    <li>
      <span>
        <input type='checkbox' checked={props.product.inCart} onChange={() => {props.OnAddToCart(props.product.id)}} />
        {props.product.title} --- {props.product.category}
      </span> 
    </li>
    );
}
export default ListCartItem;