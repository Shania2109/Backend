//Function para gestionar las rutas del proyecto
//Necesita el objeto express para crear los endpoint
//endpoint: ruta REST que expone colecciones/singleton/resulrados operacion en formato JSON
import { addMascota, 
    getMascotas,
getMascotaById,
updateMascota,
deleteMascota} from "../controladores/mascotaController.js"


const rutas = (app) =>{
    app.route('/mascotas')
    .get(getMascotas)
    .post( addMascota); 

    app.route('/mascotas/:mascotaid')
    .get(getMascotaById)
    .put(updateMascota)
    .delete(deleteMascota)
}

export default rutas;