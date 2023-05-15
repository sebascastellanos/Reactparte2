import { useEffect, useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";
import { getEstudiantes } from "./peticiones/getEstudiantes";
import { postEstudiante } from "./peticiones/postEstudiante";
import { editarEstudiante } from "./peticiones/editarEstudiante";

export const EstudiantesApp = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    console.log(estudiantes);

    const agregarEstudiante = (estudiante) => {
        setEstudiantes([...estudiantes, estudiante])
        postEstudiante(estudiante);
    }
    const cargueEstudiantes = async () => {
        const datos = await getEstudiantes()
        setEstudiantes(datos);
    }
    useEffect(()=>{
        cargueEstudiantes();
    },[])
    const editarEstudiante = (estudiante) => {
        console.log(estudiante);
        setEstudiantes(estudiante);
    }
    
    return (
        <>
            <FormularioEstudiante agregar={(estu) => { agregarEstudiante(estu) }} />
            <TablaEstudiante listaEstudiantes={estudiantes} />
        </>
    )
}
