import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"; // Correcta ruta

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;