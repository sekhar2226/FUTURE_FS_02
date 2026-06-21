import { BrowserRouter, Routes, Route } from "react-router-dom";
import CRM from "./pages/CRM";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CRM />} />
        <Route path="/crm" element={<CRM />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;