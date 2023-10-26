import React from 'react';
import { useState, useEffect} from 'react';
import Form from '../Form/Form.jsx';
import Header from '../Header/Header.jsx';
import './App.css';
import axios from 'axios';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';

function App() {
    const [shoppingList, setShoppingList] = useState([]);

    const getShoppingList = () => {
        axios.get('/shoppinglist').then((response) => {
            console.log(response.data);
            setShoppingList(response.data)
        }).catch((error) => {
            console.log('GET/shoppinglist error', error);
            alert('Something went wrong getting your list!');
        });
    };

    useEffect(() => {
        getShoppingList();
    }, []);

    return (
        <div className="App">
            <Header />
            <Form getShoppingList={getShoppingList}/>
            <ShoppingList getShoppingList={getShoppingList} list={shoppingList}/>
        </div>
    );
}
export default App;