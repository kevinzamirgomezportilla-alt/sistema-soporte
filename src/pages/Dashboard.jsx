function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h3>Tickets Abiertos</h3>
          <p>12</p>
        </div>

        <div className="card">
          <h3>Usuarios</h3>
          <p>5</p>
        </div>

        <div className="card">
          <h3>Tickets Cerrados</h3>
          <p>20</p>
        </div>

        <div className="card">
          <h3>Reportes Generados</h3>
          <p>8</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
``