import React from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Single from "./pages/Single/Single";
import New from "./pages/New/New";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=':userId' element={<Single />} />
            <Route path='new' element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=':userId' element={<Single />} />
            <Route path='new' element={<New />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
