import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Navbar/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/contact" element={<Contact/>} />
        <Route  path="/search" element={<Search/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
