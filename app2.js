const formulario1 = document.getElementById('formulario');
const registro = document.getElementById('registro1');
const exito = document.getElementById('exito1');

formulario.addEventListener('submit', async(e) => {
	e.preventDefault();

// Escribir Filas
// try {
//     const respuesta = await fetch('https://sheet.best/api/sheets/c886b66e-df88-4a1d-bd68-229b550272c3', {
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "ID": formulario.ID.value,
//             "Nombre": formulario.Nombre.value,
//             "Lugar": formulario.Lugar.value
//         })
//     });

//     const contenido = await respuesta.json();
//     console.log(contenido);
// } catch(error){
//     console.log(error);
// }

// Leer Filas
try {
	const respuesta = await fetch('https://sheet.best/api/sheets/c886b66e-df88-4a1d-bd68-229b550272c3');

	const contenido = await respuesta.json();
	console.log(contenido);
} catch(error){
	console.log(error);
}


// Eliminar Filas
// try {
// 	const respuesta = await fetch('https://sheet.best/api/sheets/c886b66e-df88-4a1d-bd68-229b550272c3/0', {
// 		method: 'DELETE'
// 	});

// 	const contenido = await respuesta.json();
// 	console.log(contenido);
// } catch(error){
// 	console.log(error);
// }


// Actualizar Filas
// try {
// 	const respuesta = await fetch('https://sheet.best/api/sheets/c886b66e-df88-4a1d-bd68-229b550272c3/3', {
// 		method: 'PATCH',
// 		mode: 'cors',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify({
// 			"Telefono": "000 000 000"
// 		})
// 	});

// 	const contenido = await respuesta.json();
// 	console.log(contenido);
// } catch(error){
// 	console.log(error);
// }


registro.classList.remove('activo');
exito.classList.add('activo');
});