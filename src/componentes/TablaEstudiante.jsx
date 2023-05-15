import { useState } from "react";
import { FormularioEstudiante } from "./FormularioEstudiante";

export const TablaEstudiante = ({ listaEstudiantes }) => {

  // const [buscarName, setBuscarName] = useState("");
  const [buscarFac, setBuscarFac] = useState("");
  // const [estudianteEncontradoName, setEstudianteEncontradoName] = useState(null);
  const [estudiantesEncontradosFac, setEstudiantesEncontradosFac] = useState([]);


  const editar = (event) => {
  }

  function deleteRow(event) {
    const row = event.target.parentNode.parentNode;
    const idCell = row.querySelector('td:first-child');//toma la primera data de el respectivo row lo que seria el id
    const id = idCell.textContent.trim();

    fetch(`http://localhost:8080/estudiante/eliminar/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {

          row.parentNode.removeChild(row);
        }
      })

  }

  const buscarEstudiantePorFacultad = (facultad) => {
    return listaEstudiantes.filter((estudiante) => estudiante.facultad == facultad)
  }

  // const buscarEstudiantePorNombre = (nombre) => {
  //   return listaEstudiantes.find((estudiante) => estudiante.nombre === nombre);
  // };

  const buscarEstFac = (event) => {
    event.preventDefault();
    const estudiantesEncontrados = buscarEstudiantePorFacultad(buscarFac);
    setEstudiantesEncontradosFac(estudiantesEncontrados);
  };

  // const buscarEstName = (event) => {    
  //   event.preventDefault();
  //   const elementoEncontradoName = buscarEstudiantePorNombre(buscarName);
  //   setEstudianteEncontradoName(elementoEncontradoName);
  // };

  const limpiarBusqueda = () => {
    // setBuscarName("");
    setBuscarFac("");
    // setEstudianteEncontradoName(null);
    setEstudiantesEncontradosFac([]);
  };

  return (
    <>
      <form onSubmit={buscarEstFac}>
        <br />
        <div className="form-group input-group">


          {/* <input type="text" className="form-control" id="buscarName" placeholder="Buscar " value={buscarFac} onChange={(event) => setBuscarFac(event.target.value)} /> */}
          <br></br>
          <select ClassName="form-control" id="facultad" placeholder="facultad" value={buscarFac} onChange={(event) => setBuscarFac(event.target.value)}>
            <option value="">--Seleccione la facultad--</option>
            <option value="Ingenieria">Ingenieria</option>
            <option value="Medicina">Medicina</option>
            <option value="Comunicacion">Comunicacion</option>
            <option value="Educacion">Educacion</option>
            <option value="Derecho">Derecho</option>
          </select>
          <br></br>
          <button type="submit" className="btn btn-primary"> Buscar
          </button>
        </div>
      </form>

      {
        estudiantesEncontradosFac.length > 0 ? (
          // <div>
          //   <h3>Estudiante encontrado:</h3>
          //   <table className="table">
          //     <thead>
          //       <tr>
          //         <th scope="col">Id Estudiante</th>
          //         <th scope="col">Nombre</th>
          //         <th scope="col">Semestre</th>
          //         <th scope="col">Facultad</th>
          //       </tr>
          //     </thead>
          //     <tbody>
          //     {listaEstudiantes.map((estudiante) => (
          //         <tr key={estudiante.facultad}>
          //           <td>{estudiante.id}</td>
          //           <td>{estudiante.nombre}</td>
          //           <td>{estudiante.semestre}</td>
          //           <td>{estudiante.facultad}</td>
          //         </tr>
          //       ))}
          //     </tbody>
          //   </table>
          //   <button className="btn btn-info" onClick={limpiarBusqueda}> Limpiar búsqueda
          //   </button>
          // </div>
          <div>
            <h3>Estudiante encontrado:</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id Estudiante</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Semestre</th>
                  <th scope="col">Facultad</th>
                  <th scope="col">Genero</th>
                </tr>
              </thead>
              <tbody>
                {estudiantesEncontradosFac.map((estudiante, index) => (
                  <tr key={index}>
                    <td>{estudiante.id}</td>
                    <td>{estudiante.nombre}</td>
                    <td>{estudiante.semestre}</td>
                    <td>{estudiante.facultad}</td>
                    <td>{estudiante.genero}</td>
                    <td>
                      <button className="btn btn-danger" onClick={deleteRow}> Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-info" onClick={limpiarBusqueda}> Limpiar búsqueda
            </button>
          </div>
        ) : (
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id Estudiante</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Semestre</th>
                  <th scope="col">Facultad</th>
                  <th scope="col">Genero</th>
                  <th scope="col">Modificar</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {listaEstudiantes.map((estudiante) => (
                  <tr key={estudiante.facultad}>
                    <td>{estudiante.id}</td>
                    <td>{estudiante.nombre}</td>
                    <td>{estudiante.semestre}</td>
                    <td>{estudiante.facultad}</td>
                    <td>{estudiante.genero}</td>
                    <td>
                      <button className="btn btn-success" onClick={editar}> Editar

                      </button>
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={deleteRow}> Eliminar
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
    </>
  );
};
