import mongoose  from "mongoose";

//Definir el esquema de mascota
const Schema = mongoose.Schema;

const MascotaSchema = new Schema({
    nombre: {
        type: String,
        required: "Ingrese el Nombre"
    },
    Tipo : {
        type: String,
        required: "Ingrese Apellido"
    },
    Raza: {
        type : String,
        required: "Ingrese la Raza"

    }
})

export default MascotaSchema