import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeddingWebsite from "./components/WeddingWebsite";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WeddingWebsite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;