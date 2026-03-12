type EstadoOds = 'Aprobado'|'Ejecucion'|'Completado'|'Rechazado';
export interface InterfazSostenible{
    id: number;
    odsFav:String;
    estado:EstadoOds;
    color: string;
    backgroundColor: string,
}
export const odsAlumnos: InterfazSostenible[] = [
  {
    id: 1,
    odsFav: "Fin de la pobreza",
    estado: "Rechazado",
    color: "#fa1111ff",
    backgroundColor: "#ed8686ff",
  },
  {
    id: 2,
    odsFav: "Hambre cero",
    estado: "Ejecucion",
    color: "#1faca7ff",
    backgroundColor: "#a0ece9ff",
  },
  {
    id: 3,
    odsFav: "Salud y bienestar",
    estado: "Aprobado",
    color: "#b0d154ff",
    backgroundColor: "#e7f188ff",
  },
  {
    id: 4,
    odsFav: "Educacion de calidad",
    estado: "Completado",
    color: "#3aaf32ff",
    backgroundColor: "#b0ec6cff",
  },
  {
    id: 5,
    odsFav: "Igualdad de genero",
    estado: "Rechazado",
    color: "#3b38e3ff",
    backgroundColor: "#aaa2f6ff",
  },
  {
    id: 6,
    odsFav: "Agua limpia y saneamiento",
    estado: "Completado",
    color: "#e338a4ff",
    backgroundColor: "#f6a2deff",
  },
  {
    id: 7,
    odsFav: "Energia asequible y no contaminante",
    estado: "Rechazado",
    color: "#be38e3ff",
    backgroundColor: "#e1a2f6ff",
  },
  {
    id: 8,
    odsFav: "Trabajo decente y crecimiento economico",
    estado: "Rechazado",
    color: "#fa1111ff",
    backgroundColor: "#ed8686ff",
  },
  {
    id: 9,
    odsFav: "Industria, innovacion e infraestructura",
    estado: "Ejecucion",
    color: "#1faca7ff",
    backgroundColor: "#a0ece9ff",
  },
  {
    id: 10,
    odsFav: "Reduccion de las desigualdades",
    estado: "Aprobado",
    color: "#b0d154ff",
    backgroundColor: "#e7f188ff",
  },
  {
    id: 11,
    odsFav: "Ciudades y comunidades sostenibles",
    estado: "Rechazado",
    color: "#be38e3ff",
    backgroundColor: "#e1a2f6ff",
  },
  {
    id: 12,
    odsFav: "Produccion y consumo responsables",
    estado: "Rechazado",
    color: "#be38e3ff",
    backgroundColor: "#e1a2f6ff",
  },
  {
    id: 13,
    odsFav: "Accion por el clima",
    estado: "Completado",
    color: "#e338a4ff",
    backgroundColor: "#f6a2deff",
  },
  {
    id: 14,
    odsFav: "Vida submarina",
    estado: "Rechazado",
    color: "#be38e3ff",
    backgroundColor: "#e1a2f6ff",
  },
  {
    id: 15,
    odsFav: "Vida de ecosistemas terrestres",
    estado: "Rechazado",
    color: "#fa1111ff",
    backgroundColor: "#ed8686ff",
  },
  {
    id: 16,
    odsFav: "Paz, justicia e instituciones solidas",
    estado: "Ejecucion",
    color: "#1faca7ff",
    backgroundColor: "#a0ece9ff",
  },
  {
    id: 17,
    odsFav: "Alianzas para lograr los objetivos",
    estado: "Aprobado",
    color: "#b0d154ff",
    backgroundColor: "#e7f188ff",
  },
];
