import { useState } from "react"
import { act } from "react-dom/test-utils";






export const FormularioEstudiante = ({ agregar, actualizar, estudiandoEditado, setestudianteEditado }) => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");

    const guardarEstudiante = (event) => {
        event.preventDefault();

        let estudiante = {
            id: id,
            nombre: nombre,
            semestre: semestre
        }
        agregar(estudiante)
        setId("");
        setNombre("");
        setSemestre("");
    }
    
    const actualizarEstudiante = (event) => {
        event.preventDefault();

        let estudiante = {
            id: id,
            nombre: nombre,
            semestre: semestre
        }
        actualizar(estudiante)
        setestudianteEditado(null)
        setId("");
        setNombre("");
        setSemestre("");
    }

    return (
        <>
            <p></p><form onSubmit={setestudianteEditado ? actualizarEstudiante : guardarEstudiante}>
                <div className="form-group ">
                    <label htmlFor="id">ID Estudiante</label>
                    <input type="id" className="form-control" id="id" placeholder="Ingrese id" value={id} onChange={(event) => setId(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="semestre">Semestre</label>
                    <input type="text" className="form-control" id="semestre" placeholder="semestre" value={semestre} onChange={(event) => setSemestre(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">{estudiandoEditado ? "Actualizar" : "Registrar"}</button>
                
            </form>
        </>
    )
}