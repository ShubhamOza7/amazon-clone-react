import React from 'react'
import './Order.css'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'


function Order({order}) {
  

    return (


       
          
        <div className="order">
           
            <p className="order__id">
                <h5>ORDER ID : {order.id}</h5>
            </p>

            {order.data.basket?.map(item => (
                <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                    
                />
            ) )}
                <div clsssName="total">
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total" >Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            /> 
            </div>
            </div>


    )
}

export default Order


