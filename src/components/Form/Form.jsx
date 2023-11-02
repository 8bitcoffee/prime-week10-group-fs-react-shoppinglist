// form component
import React from 'react';
import axios from 'axios';
import './Form.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';

function Form(props) {

    const clickHandler = (event) => {
        // axios POST will go here
        event.preventDefault();
        let itemName = document.querySelector('#item-name').value;
        document.querySelector('#item-name').value = "";
        let itemQuantity = document.querySelector('#item-quantity').value;
        document.querySelector('#item-quantity').value = "";
        let itemUnit = document.querySelector('#item-unit').value;
        document.querySelector('#item-unit').value = "";
    
        let newItem = {
            name: itemName,
            quantity: itemQuantity,
            unit: itemUnit
        };
    
        axios.post('/shoppinglist',(newItem)).then((response) =>{
            console.log("Response from server: ", response);
            props.getShoppingList();
        })
        .catch((error) => {
            console.error("Error in POST '/shoppinglist' in Form component", error);
            alert("Error in POST '/shoppinglist' in Form component. See console.")
        })
    }


    // main module function
    return (
        <Paper elevation={3} id="input-form">
            <h2>Add an item:</h2>
            <Box onSubmit={clickHandler}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
            noValidate
            autoComplete="off"
            >
                <label for="item-name" className="required">*</label>
                <TextField required variant="outlined" id="item-name" type="text" placeholder="item name..."/>
                <br/>
                <label for="item-quantity" className="required">*</label>
                <TextField required variant="outlined" id="item-quantity" type="number" placeholder="quantity..."/>
                <br/>
                <label for="item-unit" className="hidden">*</label>
                <TextField variant="outlined" id="item-unit" type="text" placeholder="unit of measure..."/>
                <br/>
                <label for="submit-btn" className="hidden">**</label>
                <Button id="submit-btn" variant="contained">Add Item<AddShoppingCart/></Button>
                <h5 className='required'>* denotes required</h5>
            </Box>
        </Paper>
    );
}

export default Form;

// This is a comment to create my own branch and pull request