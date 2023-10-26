import { useState, useEffect } from 'react';
import DisplayItem from '../DisplayItem/DisplayItem';
import axios from 'axios';

function ShoppingList (props) {
    // const [shoppingList, setShoppingList] = useState([]);

    // const getShoppingList = () => {
    //     axios.get('/shoppinglist').then((response) => {
    //         console.log(response.data);
    //         setShoppingList(response.data)
    //     }).catch((error) => {
    //         console.log('GET/shoppinglist error', error);
    //         alert('Something went wrong getting your list!');
    //     });
    // };

    const resetList = () => {
        axios.put('/shoppinglist/all').then((response) =>{
            console.log("All items reset as unpurchased.", response);
            props.getShoppingList();
        })
        .catch((error) => {
            console.error("Error in PUT '/shoppinglist/all' inside ShoppingList component.", error);
            alert("Error in PUT '/shoppinglist/all' inside ShoppingList component. See console.");
        });
    }
    // useEffect(() => {
    //     getShoppingList();
    // }, []);

    const clearList = () => {
        axios.delete('/shoppinglist/all').then((response) => {
            console.log("List cleared successfully", response);
            props.getShoppingList();
        })
        .catch((error) => {
            console.error("Error in DELETE '/shoppinglist/all' inside ShoppingList component.", error);
            alert("Error in DELETE '/shoppinglist/all' inside ShoppingList component. See console.");
        });
    }


    return (
        <div id="shopping-list">
            <button onClick={resetList}>Reset</button>
            <button onClick={clearList}>Clear</button>
            <div>

                {props.list.map((item) => (<DisplayItem getShoppingList={props.getShoppingList} key={item.id} item={item}/>))}
            </div>
        </div>
    )
}

export default ShoppingList;
