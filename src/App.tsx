import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainDashboard from "./pages/mainDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainDashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
