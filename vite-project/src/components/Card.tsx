import type { InterfazSostenible } from "../data/Ods";

export const Card =({itemOds}:{itemOds:InterfazSostenible})=>{
    return (
      <div
        className="card"
        style={{
          backgroundColor: itemOds.backgroundColor,
          borderRadius: "16px",
          boxShadow: "0 10px 20 px" + itemOds.color,
          padding: "20px",
          margin: "15px",
          width: "220px",
          display: "inline-block",
          textAlign: "center",
          fontFamily: "'Segoe UI', Roboto, sans-serif",
          transition: "transform 0.3 ease-in-out",
          cursor: "pointer",
        }}
      >
        <h3
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: itemOds.color,
            marginBottom: "10px",
          }}
        >
          {itemOds.id}
        </h3>
        <p
          style={{
            fontSize: "1.5rem",
            color: itemOds.color,
            marginBottom: "10px",
          }}
        >
          {itemOds.odsFav}
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            fontStyle: "italic",
            color: itemOds.color,
            marginBottom: "10px",
          }}
        >
          {itemOds.estado}
        </p>
      </div>
    );
}