import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./components/firstPage";
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
