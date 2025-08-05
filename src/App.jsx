import HomePage from "./components/HomePage"
import OrderForm from "./components/OrderForm"
import OrderConfirmation from "./components/OrderConfirmation"
import { useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

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

     <ToastContainer
      position="bottom-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  
  </>
);
}

export default App
