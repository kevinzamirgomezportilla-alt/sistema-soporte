import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Tickets from "./pages/Tickets";
import Usuarios from "./pages/Usuarios";
import Dashboard from "./pages/Dashboard";
import Reportes from "./pages/Reportes";

function App() {
  return (
    <div className="app">
      
      <aside className="sidebar">
        <h2>Soporte</h2>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/tickets">Tickets</Link></li>
          <li><Link to="/usuarios">Usuarios</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/reportes">Reportes</Link></li>
        </ul>
      </aside>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reportes" element={<Reportes />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
``