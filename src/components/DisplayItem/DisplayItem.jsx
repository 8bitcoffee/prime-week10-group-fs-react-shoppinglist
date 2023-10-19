import axios from 'axios';
import {useEffect, useState} from 'react';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';

function DisplayItem(props){
    
    // const [shoppingList, setShoppingList] = useState([]);

    // const getShoppingList = () => {
    //     axios.get('/shoppinglist').then((response) => {
    //         setShoppingList(response.data)
    //     }).catch((error) => {
    //         console.log('GET/shoppinglist error', error);
    //         alert('Something went wrong getting your list!');
    //     });
    // };

    // useEffect(() => {
    //     getShoppingList();
    // }, []);

    const purchaseItem = () => {
        console.log(`Purchase request for ${props.item.id}`);
        axios.put(`/shoppinglist/${props.item.id}`).then((response) => {
            console.log(`${props.item.name} purchased`);
            <ShoppingList/>;
        }).catch((error) => {
            console.log('PUT error', error);
            alert('Something went wrong trying to buy this item');
        })
    };
        
    const removeItem = () => {
        console.log('item to remove:', props.item.id);
        axios.delete(`/shoppinglist/${props.item.id}`).then((response) => {
            console.log('you successfully deleted your item');
        }).catch((error) => {
            console.log(`DELETE ERROR`, error);
            alert('your item was not deleted');
        })   
    }

    const purchased = () => {
        if(props.item.purchased === true){
        return <p>Item Purchased</p>
        }else if(props.item.purchased === false){
        return <button onClick={purchaseItem}>Buy</button>
        }
    }

        return(
            <div>
                <p>{props.item.name}</p>
                <p>{props.item.quantity}</p>
                <p>{props.item.unit}</p>
                <p>{purchased(props.item.purchased)}</p>
                <button onClick={removeItem}>Remove</button>
            </div>

        );

}

export default DisplayItem;