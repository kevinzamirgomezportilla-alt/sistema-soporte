import { useState } from "react";

function Tickets() {
  const [tickets, setTickets] = useState([
    { id: 1, titulo: "Error en sistema", estado: "Abierto" },
    { id: 2, titulo: "Problema login", estado: "Cerrado" }
  ]);

  const [nuevoTicket, setNuevoTicket] = useState("");
  const [estado, setEstado] = useState("Abierto");
  const [editandoId, setEditandoId] = useState(null);

  const agregarOEditarTicket = () => {
    if (nuevoTicket.trim() === "") return;

    if (editandoId) {
      // EDITAR
      const actualizados = tickets.map(ticket =>
        ticket.id === editandoId
          ? { ...ticket, titulo: nuevoTicket, estado }
          : ticket
      );
      setTickets(actualizados);
      setEditandoId(null);
    } else {
      // CREAR
      const nuevo = {
        id: Date.now(),
        titulo: nuevoTicket,
        estado: estado
      };
      setTickets([...tickets, nuevo]);
    }

    setNuevoTicket("");
    setEstado("Abierto");
  };

  const eliminarTicket = (id) => {
    setTickets(tickets.filter(t => t.id !== id));
  };

  const editarTicket = (ticket) => {
    setNuevoTicket(ticket.titulo);
    setEstado(ticket.estado);
    setEditandoId(ticket.id);
  };

  return (
    <div>
      <h1>Gestión de Tickets</h1>

      {/* FORMULARIO */}
      <div className="formulario">
        <input
          type="text"
          placeholder="Título del ticket"
          value={nuevoTicket}
          onChange={(e) => setNuevoTicket(e.target.value)}
        />

        <select value={estado} onChange={(e) => setEstado(e.target.value)}>
          <option>Abierto</option>
          <option>Cerrado</option>
        </select>

        <button onClick={agregarOEditarTicket}>
          {editandoId ? "Actualizar" : "Agregar"}
        </button>
      </div>

      {/* TABLA */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.titulo}</td>
              <td>{ticket.estado}</td>
              <td>
                <button onClick={() => editarTicket(ticket)}>
                  Editar
                </button>
                <button onClick={() => eliminarTicket(ticket.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Tickets;