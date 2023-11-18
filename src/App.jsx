/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Main from "./components/main";
import Navbar from "./components/navbar";
import Vision from "./components/vision";
import All from "./components/all";
import Whyus from "./components/whyus";
import Ourteam from "./components/ourteam";
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          {/* <Route path="/" element={<Vision />} /> */}
          {/* <Route path="/" element={<Main />}> */}
          {/* <Route path="/" element={<Navbar />}> */}

          {/* </Route> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
