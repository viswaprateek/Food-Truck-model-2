import React, { useState } from 'react';
import { Button, Typography, Dialog, DialogContent, Box } from '@mui/material';
import { useAuth } from '../contexts/AuthContext'; // Adjust the import path as necessary
import DeliveryForm from './DeliveryForm'; // Ensure this path is correct
import MockPaymentForm from './MockPaymentForm'; // Ensure this path is correct
import { useOrders } from '../contexts/OrdersContext'; // Import the OrdersContext hook
// import { OrdersProvider } from '../contexts/OrdersContext.jsx';

const PlaceOrder = () => {
  const { isAuthenticated } = useAuth();
  // const { addOrder } = useOrders(); 
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [orderData, setOrderData] = useState(null); 

  const handleOpenDeliveryForm = () => {
    setShowDeliveryForm(true);
  };

  const handleSubmitDeliveryDetails = (deliveryDetails) => {
    console.log('Delivery Details:', deliveryDetails);
    // Here, you'd normally validate and process delivery details
    setOrderData(deliveryDetails); // Store delivery details in state
    setShowDeliveryForm(false); // Close the delivery form
    setShowPaymentForm(true); // Open the payment form
  };

  const handlePaymentSuccess = () => {
    console.log('Payment successful');
    setPaymentComplete(true); // Indicate payment success
    setShowPaymentForm(false); // Close the payment form
    // addOrder(orderData); 
  };

  return (
    
       <>
      {isAuthenticated ? (
        <>
          {!showDeliveryForm && !showPaymentForm && !paymentComplete ? (
            <Button variant="contained" color="primary" onClick={handleOpenDeliveryForm}>
              Place Order
            </Button>
          ) : null}

          <Dialog open={showDeliveryForm || showPaymentForm} onClose={() => { setShowDeliveryForm(false); setShowPaymentForm(false); }}>
            <DialogContent>
              {showDeliveryForm && (
                <DeliveryForm onSubmit={handleSubmitDeliveryDetails} />
              )}
              {showPaymentForm && (
                <MockPaymentForm onPaymentSuccess={handlePaymentSuccess} />
              )}
            </DialogContent>
          </Dialog>

          {paymentComplete && (
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant="h5">Payment Successful! Thank you for your order.</Typography>
            </Box>
          )}
        </>
      ) : (
        <Typography variant="subtitle1">
          Please log in to place your order.
        </Typography>
      )}
    </>
    
   
  );
};

export default PlaceOrder;
