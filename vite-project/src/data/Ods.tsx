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
];
