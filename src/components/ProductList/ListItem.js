import React from 'react';

function ListItem(props) {
  
  return (
    <li>
      <span>
          {props.product.title} --- {props.product.category}
      </span> 
    </li>
    );
}
export default ListItem;