import React, {useEffect, useContext, useRef} from 'react';
import ListItem from './ListItem';
import {StateContext} from '../../context';

export default function List(props) {
    
  const {appState, setAppState} = useContext(StateContext);
  
  
  const myInput = useRef(null);
  const mySelect = useRef(null);

  useEffect(() => {
    const savedPoducts = JSON.parse(localStorage.getItem('appState') || '[]')
    setAppState(savedPoducts)
  }, []);

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(appState))
  }, [appState]);

  
  function addHandler(obj) {
    setAppState((prevState) => {
      return [...prevState, {id: prevState.length + 1, category: obj[0], title: obj[1], inCart: false}]
    })
  }

  const styles = {
    ul: {
      listStyle: 'none',
      color: 'green'
    }
  };
  
  return (
    <>
    <div>Enter the name of new product and pick a category: </div>
    <input type='text' ref={myInput}/>
    <select ref={mySelect}>
      <option value="Meat">Meat</option>
      <option value="Fish">Fish</option>
      <option value="Grains">Grains</option>
      <option value="Fruits">Fruits</option>
      <option value="Veges">Veges</option>
    </select>
    <button onClick={() => {addHandler([mySelect.current.value, myInput.current.value])}}>Add product</button>
    <ul style={styles.ul}>
      {appState.map((product, index) => {
        return <ListItem product={product} key={product.id}/>  
      })}
    </ul>
    </>
    );
}