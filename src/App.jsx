import HomePage from "./components/HomePage"
import OrderForm from "./components/OrderForm"
import OrderConfirmation from "./components/OrderConfirmation"
import { useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";

function App() {
  const [page,setPage] = useState("home");
  const [orderData,setOrderData] = useState(null);

  const onStart = () => {
    setPage("order");
  };

   const goHome = () => {
    setPage("home");
  }


  const submitOrder = async (data) => {
  try {
    const response = await axios.post("https://reqres.in/api/pizza", data, {
      headers: {
        "x-api-key": "reqres-free-v1"
      }
    });
    console.log("Sipariş yanıtı:", response.data);
    setOrderData(response.data);
    setPage("confirmation");
  } catch (error) {
    console.error("Sipariş gönderilirken hata:", error);
    toast.error("Sipariş gönderilemedi. Lütfen internet bağlantınızı kontrol edin.");
  }
};

  
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
      autoClose={10000}
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
