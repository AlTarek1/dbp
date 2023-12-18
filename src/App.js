import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Leagues, Standing, Create, Home } from "./pages";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/standing" element={<Standing />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
