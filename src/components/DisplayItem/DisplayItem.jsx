import axios from 'axios';
import './DisplayItem.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

function DisplayItem(props){

    const purchaseItem = () => {
        console.log(`Purchase request for ${props.item.id}`);
        axios.put(`/shoppinglist/${props.item.id}`).then((response) => {
            console.log(`${props.item.name} purchased`);
            props.getShoppingList();
        }).catch((error) => {
            console.log('PUT error', error);
            alert('Something went wrong trying to buy this item');
        })
    };
        
    const removeItem = () => {
        console.log('item to remove:', props.item.id);
        axios.delete(`/shoppinglist/${props.item.id}`).then((response) => {
            console.log('you successfully deleted your item');
            props.getShoppingList()
        }).catch((error) => {
            console.log(`DELETE ERROR`, error);
            alert('your item was not deleted');
        })   
    }

    const purchased = () => {
        if(props.item.purchased === true){
            return <>Item Purchased</>
        }
        else if(props.item.purchased === false){
            return <Button variant="contained" onClick={purchaseItem}>Buy</Button>
        }
    }

        return(
            <Card>
                <CardContent>
                    <Typography variant="h4">
                        {props.item.name}
                    </Typography>
                    <Typography variant="h5">
                        Quantity Needed: {props.item.quantity}
                    </Typography>
                    <Typography variant="h6">
                        Unit: {props.item.unit}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Typography>{purchased(props.item.purchased)}</Typography>
                    <Button variant="contained" color="error" onClick={removeItem}>Remove</Button>
                </CardActions>
            </Card>

        );

}

export default DisplayItem;