import { useEffect, useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";
import { getEstudiantes } from "./peticiones/getEstudiantes";
import { postEstudiante } from "./peticiones/postEstudiante";



//<ListaEstudiantes lista={estudiantes}/>

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
    return (
        <>
            <FormularioEstudiante agregar={(estu) => { agregarEstudiante(estu) }} />
            <TablaEstudiante listaEstudiantes={estudiantes} />
        </>
    )
}
