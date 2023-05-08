import { useState } from "react";

export const TablaEstudiante = ({ listaEstudiantes }) => {
  
  // const [buscarName, setBuscarName] = useState("");
  const [buscarFac, setBuscarFac] = useState("");
  // const [estudianteEncontradoName, setEstudianteEncontradoName] = useState(null);
  const [estudianteEncontradoFac, setEstudianteEncontradoFac] = useState(null);
 

  const editar = () => {
        
  }

  function deleteRow(event) {
      const row = event.target.parentNode.parentNode;
      row.parentNode.removeChild(row);
  }

  const buscarEstudiantePorFacultad = (facultad) => {
    return listaEstudiantes.find((estudiante) => estudiante.facultad == facultad)
  }

  // const buscarEstudiantePorNombre = (nombre) => {
  //   return listaEstudiantes.find((estudiante) => estudiante.nombre === nombre);
  // };

  const buscarEstFac = (event) => {
    event.preventDefault();
    const elementoEncontradoFac = buscarEstudiantePorFacultad(buscarFac);
    setEstudianteEncontradoFac(elementoEncontradoFac);
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
    setEstudianteEncontradoFac(null);
  };

  return (
    <>
      <form onSubmit={buscarEstFac}>
        <div className="form-group">
          <label htmlFor="buscarFac">Buscar Facultad</label>
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
      estudianteEncontradoFac ? (
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
                <tr key={estudianteEncontradoFac.id}>
                  <td>{estudianteEncontradoFac.id}</td>
                  <td>{estudianteEncontradoFac.nombre}</td>
                  <td>{estudianteEncontradoFac.semestre}</td>
                  <td>{estudianteEncontradoFac.facultad}</td>
                  <td>{estudianteEncontradoFac.genero}</td>
                </tr>
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
                <th scope="col">Acciones</th>
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
