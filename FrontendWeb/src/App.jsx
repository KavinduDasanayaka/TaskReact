import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WebDetailsMiddle from "./components/WebDetailsMiddle";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/details" element={<WebDetailsMiddle />} />
      </Routes>
      <Footer />
    </div>
  );
}