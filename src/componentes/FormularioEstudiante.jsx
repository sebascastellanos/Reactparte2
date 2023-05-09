import { useState } from "react"

export const FormularioEstudiante = ({ agregar }) => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");
    const [facultad, setFacultad] = useState("");
    const [genero, setGenero] = useState("");


    const guardarEstudiante = (event) => {

        // if (isNaN(id) || id == "") {
        //     alert("El ID del estudiante debe ser un número");
        //     return;
        // }
        // if (id.length < 6 || id.length > 10){
        //     alert("El ID debe tener minimo 6 y maximo 10")
        //     return;
        // }
        if (nombre.length < 3) {
            alert("El nombre debe tener minimo 3 letras")
            return;
        }


        let estudiante = {
            id: id,
            nombre: nombre,
            semestre: semestre,
            facultad: facultad,
            genero: genero
        }
        agregar(estudiante)
        setId("");
        setNombre("");
        setSemestre("");
        setFacultad("");
        setGenero("");
    }

    return (
        <>
            

            <h1 className="text-center text-primary mb-4" style={{ fontSize: "100px", backgroundColor: "#BDDFE0"  }}>Estudiantes</h1>

            <form onSubmit={guardarEstudiante} style={{ backgroundColor: "#BDDFE0" }}>
                {/* <div className="form-group ">
                <label className="input-group-text" for="inputGroupSelect01">Id Estudiante</label>
                    <input type="id" className="form-control" id="id" placeholder="Ingrese id" value={id} onChange={(event) => setId(event.target.value)} />
                </div> */}
                <div className="form-group input-group">
                    <label class="input-group-text" for="inputGroupSelect01">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                </div>
                <br />
                <div className="form-group input-group">
                    <label class="input-group-text" for="inputGroupSelect01">Semestre</label>
                    <br></br>
                    {/* <input type="text" className="form-control" id="semestre" placeholder="semestre" value={semestre} onChange={(event) => setSemestre(event.target.value)} /> */}
                    <select class="custom-select" ClassName="form-control" id="semestre" placeholder="semestre" value={semestre} onChange={(event) => setSemestre(event.target.value)}>
                        <option value="">--Seleccione el semestre--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <br />
                <div className="form-group input-group">
                    <label class="input-group-text" for="inputGroupSelect01">Facultad</label>
                    <br></br>
                    <select ClassName="form-control" id="facultad" placeholder="facultad" value={facultad} onChange={(event) => setFacultad(event.target.value)}>
                        <option value="">--Seleccione la facultad--</option>
                        <option value="Ingenieria">Ingenieria</option>
                        <option value="Medicina">Medicina</option>
                        <option value="Comunicacion">Comunicacion</option>
                        <option value="Educacion">Educacion</option>
                        <option value="Derecho">Derecho</option>
                    </select>
                </div>
                <br />
                <div className="form-group input-group">
                    <label class="input-group-text" for="inputGroupSelect01">Genero</label>
                    <br></br>
                    <select ClassName="form-control" id="genero" placeholder="genero" value={genero} onChange={(event) => setGenero(event.target.value)}>
                        <option value="">--Seleccione su genero--</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="No decirlo">No decirlo</option>
                    </select>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
            <style>
                {`
                 ::-webkit-scrollbar {
            width: 10px;
          }

          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          ::-webkit-scrollbar-thumb {
            background: #6fc1ff;
          }
        `}
            </style>

        </>
    )
}
