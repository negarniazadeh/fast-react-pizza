import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/order/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";

const router = createBrowserRouter([
  { path: "/", Element: <Home /> },
  { path: "/menu", Element: <Menu /> },
  { path: "/cart", Element: <Cart /> },
  { path: "/order/new", Element: <CreateOrder /> },
  { path: "/order/:orderId", Element: <Order /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
