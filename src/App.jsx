import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Groups from "./pages/Groups";
import Hotels from "./pages/Hotels";
import Events from "./pages/Events";
import About from "./pages/About";
import Articles from "./pages/Articles";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      {/* Header will always show */}
      <Header />

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;
