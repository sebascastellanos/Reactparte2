export const editarEstudiante = async(estudiante) => {
    const url = `http://localhost:8080/estudiante/modificar/{codigo}`;
    const resp = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        body: {
            nombre: estudiante.nombre,
            facultad: estudiante.facultad,
            semestre: estudiante.semestre,
            programa: estudiante.genero
        }
    });
    const data = await resp.json();
}