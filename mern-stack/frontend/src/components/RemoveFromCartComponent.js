import { Button } from "react-bootstrap";
import React from 'react';




const  RemoveFromCartComponent = ({ productID, orderCreated, quantity, price, removeFromCartHandler = false }) => {
    return (
       <Button
       disabled={orderCreated}
       type="button"
       variant="secondary"
       onClick={removeFromCartHandler ? () => removeFromCartHandler(productID, quantity, price) : undefined}
       >
         <i className="bi bi-trash deleteicon"></i>  
       </Button>  
    )
}

export default RemoveFromCartComponent;