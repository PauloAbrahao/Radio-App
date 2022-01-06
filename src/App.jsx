import { BrowserRouter, Routes, Route } from "react-router-dom";
import Started from "./components/Started";
import SignUp from "./components/SignUp";

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Started />} />
        <Route path="sign-up" element={<SignUp />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
