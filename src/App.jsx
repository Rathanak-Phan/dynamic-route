import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Header from "./components/Header";
import Products from "./views/Products";
import ProDetails from "./views/ProDetails";
import { useEffect, useState } from "react";
import Cart from "./views/Cart";

function App() {
  // const cloths = [
  //   {
  //     id: 1,
  //     title: "Sport Life",
  //     price: "12.13",
  //     dis: "Model is 161 cm tall / 43 kg weight and is wearing size XS.",
  //     rate: 3.6,
  //     image:
  //       "https://zandokh.com/image/cache/catalog/products/Tag%20Space/10112510061/image_2025-12-23_11-50-26-cr-450x672.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Urban Fit",
  //     price: "11.13",
  //     dis: "Soft fabric, comfortable for daily wear.",
  //     rate: 4.0,
  //     image:
  //       "https://zandokh.com/image/cache/catalog/products/2025-12/10112510071%20Replace/SLY-8-cr-450x672.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Street Wear",
  //     price: "14.50",
  //     dis: "Modern style with breathable material.",
  //     rate: 4.2,
  //     image:
  //       "https://zandokh.com/image/cache/catalog/products/2025-12/10112510071%20Replace/SLY-8-cr-450x672.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Classic Tee",
  //     price: "9.99",
  //     dis: "Simple design, perfect for any outfit.",
  //     rate: 3.8,
  //     image:
  //       "https://zandokh.com/image/cache/catalog/products/Tag%20Space/10112510061/image_2025-12-23_11-50-26-cr-450x672.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "Active Pro",
  //     price: "15.00",
  //     dis: "Lightweight and flexible for workouts.",
  //     rate: 4.5,
  //     image:
  //       "https://zandokh.com/image/cache/catalog/products/2025-12/10112510071%20Replace/SLY-8-cr-450x672.jpg",
  //   },
  //   {
  //     id: 6,
  //     title: "Daily Wear",
  //     price: "10.50",
  //     dis: "Comfortable cotton for all-day use.",
  //     rate: 3.9,
  //     image:
  //       "https://zandokh.com/image/cache/catalog/products/Tag%20Space/10112510061/image_2025-12-23_11-50-26-cr-450x672.jpg",
  //   },
  //   {
  //     id: 7,
  //     title: "Summer Vibe",
  //     price: "13.20",
  //     dis: "Cool and airy, best for hot days.",
  //     rate: 4.1,
  //     image:
  //       "https://zandokh.com/image/cache/catalog/products/2025-12/10112510071%20Replace/SLY-8-cr-450x672.jpg",
  //   },
  //   {
  //     id: 8,
  //     title: "Minimal Look",
  //     price: "8.99",
  //     dis: "Clean style with premium feel.",
  //     rate: 3.6,
  //     image:
  //       "https://zandokh.com/image/cache/catalog/products/Tag%20Space/10112510061/image_2025-12-23_11-50-26-cr-450x672.jpg",
  //   },
  //   {
  //     id: 9,
  //     title: "Flex Wear",
  //     price: "16.30",
  //     dis: "Stretchy fabric for active lifestyle.",
  //     rate: 4.6,
  //     image:
  //       "https://zandokh.com/image/cache/catalog/products/2026-01/5152505143/TAKK3533-cr-450x672.jpg",
  //   },
  //   {
  //     id: 10,
  //     title: "Casual Line",
  //     price: "11.75",
  //     dis: "Perfect for casual and street style.",
  //     rate: 4.0,
  //     image:
  //       "https://zandokh.com/image/cache/catalog/products/Tag%20Space/10112510061/image_2025-12-23_11-50-26-cr-450x672.jpg",
  //   },
  // ];

  const [ cloths, SetCloths ] = useState([]);

  useEffect(() =>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      SetCloths(data);
    });
  }, []);

  const [ cart, SetCart ] = useState([]);

  const Add = (item) => {
    SetCart((prev) => [...prev, item]);
  }

  const Remove = (id) => {
    SetCart((prev) => prev.filter(item => item.id  !== id ));
  }

  return (
    <div>
      <Router>
        <Header cart={cart}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products cloths={cloths} Add={Add}/>} />
          <Route path="/products/:id" element={<ProDetails cloths={cloths}/>} />
          <Route path="/card" element={<Cart  cart={cart} Remove={Remove}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
