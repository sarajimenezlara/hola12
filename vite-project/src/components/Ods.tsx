function Ods(){
    enum listaODS {
      ods1 = "Fin de la pobreza",
      ods2 = "Hambre cero",
      ods3 = "Salud y bienestar",
      ods4 = "Educación y Calidad",
      ods5 = "Igualdad de Género",
      ods6 = "Agua Limpia y Saneamiento.",
      ods7 = "Energía asequible y no Contaminante",
      ods8 = "Trabajo Decente y Crecimiento Económico",
    }
    type EstadoOds = 'Aprobado'|'Ejecucion'|'Completado'|'Rechazado';
    interface InterfazSostenible{
        id: number;
        odsFav:listaODS;
        estado:EstadoOds;
    }
    const odsAlumnos: InterfazSostenible[]=[{
        id:1,
        odsFav:listaODS.ods1,
        estado:'Rechazado'
    },
    {
        id: 2,
        odsFav: listaODS.ods2,
        estado: "Ejecucion"
    }
    ];
    let odsFav = listaODS.ods6;
    function filtrarProyectosClimaticos(
        ods: InterfazSostenible[],
    ): InterfazSostenible[]{
        return ods.filter((o) => o.estado === "Ejecucion")
    }
    const resultadoJson = filtrarProyectosClimaticos(odsAlumnos);
    console.log(resultadoJson);
    return <h1>{JSON.stringify(resultadoJson,null,1)}</h1>;
}
export default Ods;