import { Route, Routes, Navigate } from "react-router-dom";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

// Components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";

function App() {
    return (
        <ProductContextProvider>
            <CartContextProvider>
                <Navbar />
                <Routes>
                    <Route path="/products" element={<Store />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/cart" element={<ShopCart />} />
                    <Route path="/*" element={<Navigate to="/products" />} />
                </Routes>
            </CartContextProvider>
        </ProductContextProvider>
    );
}

export default App;
