import { useState } from "react"

export const FormularioEstudiante = ({ agregar }) => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");
    const [facultad, setFacultad] = useState("");
    const [genero, setGenero] = useState("");

    const guardarEstudiante = (event) => {
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

    function habilitarButton() {
        var semes = document.getElementById("semes").value
        var fac = document.getElementById("facultad").value
        var gen = document.getElementById("genero").value
        if (semes == "") {
            document.getElementById("registrar").disabled = true;
        } else if (fac == "") {
            document.getElementById("registrar").disabled = true;
        } else if (gen == "") {
            document.getElementById("registrar").disabled = true;
        } else {
            document.getElementById("registrar").disabled = false;
        }
    }


    return (
        <>
        <script>
            
        </script>
            <h1 className="text-center text-primary " style={{ fontSize: "100px", backgroundColor: "#BDDFE0"}}>Estudiantes</h1>
            <form onSubmit={guardarEstudiante} style={{ backgroundColor: "#BDDFE0" }}>
                <div className="form-group input-group">
                    <label class="input-group-text" for="inputGroupSelect01">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                </div>
                <br />
                <div className="form-group input-group">
                    <label class="input-group-text" for="inputGroupSelect01">Semestre</label>
                    <br></br>
                    <select id="semes" value={semestre} onChange={(event) => {setSemestre(event.target.value); habilitarButton();}}>
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
                <br/>
                <div className="form-group input-group">
                    <label class="input-group-text" for="inputGroupSelect01">Facultad</label>
                    <br></br>
                    <select id="facultad" value={facultad} onChange={(event) => {setFacultad(event.target.value); habilitarButton();}}>
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
                    <select id="genero" value={genero} onChange={(event) => {setGenero(event.target.value); habilitarButton();}}>
                        <option value="">--Seleccione su genero--</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="No decirlo">No decirlo</option>
                    </select>
                </div>
                <br />  
                <button id = "registrar" type="submit" className="btn btn-primary" disabled>Registrar</button>
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