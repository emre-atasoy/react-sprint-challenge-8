import HomePage from "./components/HomePage"
import OrderForm from "./components/OrderForm"
import OrderConfirmation from "./components/OrderConfirmation"
import { useState } from "react"

function App() {
  const [page,setPage] = useState("home");
  const [orderData,setOrderData] = useState(null);

  const onStart = () => {
    setPage("order");
  };

  const submitOrder = (data) => {
    setOrderData(data);
    setPage("confirmation")
  } 

  const goHome = () => {
    setPage("home");
  }

  
  return (
  <>
    {page === "home" && <HomePage onStart={onStart} />}
    {page === "order" && (
      <OrderForm submitOrder={submitOrder} goHome={goHome} />
    )}
    {page === "confirmation" && (
      <OrderConfirmation goHome={goHome} orderData={orderData} />
    )}
  
  </>
);
}

export default App
