import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Leagues, Standing, Create, Home } from "./pages";
import { LeaguesContext } from "./Contexts/LeaguesContext";
import { useState } from "react";
function App() {
  const [League, setLeague] = useState([
    {
      name: "Leaguuuu",
      clubs: [
        { name: "a", points: 0 },
        { name: "b", points: 0 },
        { name: "c", points: 10 },
      ],
    },
    {
      name: "Leagu222uuu",
      clubs: [
        { name: "d", points: 0 },
        { name: "e", points: 0 },
        { name: "f", points: 10 },
      ],
    },
  ]);
  const [currentLeague, setCurrentLeague] = useState([]);
  const [icurrentLeague, setICurrentLeague] = useState(0);
  return (
    <LeaguesContext.Provider
      value={{
        League,
        setLeague,
        icurrentLeague,
        setICurrentLeague,
        currentLeague,
        setCurrentLeague,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/standing" element={<Standing />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </LeaguesContext.Provider>
  );
}

export default App;
