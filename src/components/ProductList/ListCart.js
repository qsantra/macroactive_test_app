import React, {useEffect, useContext} from 'react';
import ListCartItem from './ListCartItem';
import {StateContext} from '../../context';

function ListCart(props) {
    
  const {appState, setAppState} = useContext(StateContext);
  
 useEffect(() => {
    const savedPoducts = JSON.parse(localStorage.getItem('appState') || '[]')
    setAppState(savedPoducts)
  }, []);

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(appState))
  }, [appState]);

  function addToCart(id) {  
    setAppState(
      appState.map(product => {
        if (product.id === id) {
          product.inCart = !product.inCart
        }
        return product;
      })
    );
  }
 

  const styles = {
    ul: {
      listStyle: 'none',
      color: 'red'
    }
  };

    return (
      <>
      <div>List of products: </div>
      
      <ul style={styles.ul}>
        {appState.map((product) => {
          return <ListCartItem product={product} key={product.id} OnAddToCart={addToCart}/>  
        })}
      </ul>
      </>
      );
}

export default ListCart;