import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import About from "./About"
import Navbar from "./Navbar";
import Register from "./Register";
import Lifecycle from "./Lifecycle";
// import Apiget from "./Apiget";
import Apipost from "./Apipost";

import './navbar.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>Error 404 Page Not Found...!</h1>} />
        </Routes>
      </BrowserRouter>

      <Lifecycle />
      {/* <Apiget /> */}
      <Apipost />
    </>
  );
}

export default App;
