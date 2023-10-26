import DisplayItem from '../DisplayItem/DisplayItem';
import axios from 'axios';
import './ShoppingList.css';

function ShoppingList (props) {

    const resetList = () => {
        if (window.confirm('Are you sure you want to remove all purchases? This cannot be undone.')) {
        axios.put('/shoppinglist/all').then((response) =>{
            console.log("All items reset as unpurchased.", response);
            props.getShoppingList();
        })
        .catch((error) => {
            console.error("Error in PUT '/shoppinglist/all' inside ShoppingList component.", error);
            alert("Error in PUT '/shoppinglist/all' inside ShoppingList component. See console.");
        });
    } else {
        return;
    }
    }

    const clearList = () => {
      if (window.confirm('Are you sure you want to delete your list? This cannot be undone.')) {
        axios.delete('/shoppinglist/all').then((response) => {
            console.log("List cleared successfully", response);
            props.getShoppingList();
        })
        .catch((error) => {
            console.error("Error in DELETE '/shoppinglist/all' inside ShoppingList component.", error);
            alert("Error in DELETE '/shoppinglist/all' inside ShoppingList component. See console.");
        });
    } else {
        return;
    }
    }

    return (
        <div id="shopping-list">
            <hr></hr>
            <h3>Shopping List:</h3>
            <button onClick={resetList}>Reuse List</button>
            <button onClick={clearList}>Delete All</button>
            <hr></hr>
            <div id="shopping-list-body">
                {props.list.map((item) => (<DisplayItem getShoppingList={props.getShoppingList} key={item.id} item={item}/>))}
            </div>
        </div>
    )
}

export default ShoppingList;
