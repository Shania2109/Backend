import { request, response } from "express";
import mongoose  from "mongoose";
import MascotaSchema from "../modelos/mascotaModel.js";

//Crear objeto mascota basado en el schema:
const Mascota = mongoose.model('Mascota', MascotaSchema)

//Crear accion para registrar nueva mascota:
export const addMascota =  (request, response) => {

    //Crear nueva mascota:
    let p = new Mascota(request.body);
    //grabr la nueva mascota
    p.save((error, p) => {
        if (error) {
            response.send(error);
        } else {
            response.json(p);
        }
    });
}

//accion para obtener el listado de mascota
export const getMascotas = (request, response) =>{
    Mascota.find({ } ,(error, mascotas) =>{
        if (error){
            response.send(error)
        }else{
            response.json(mascotas)
        }
    })
}

//accion para obtener una mascota por su id
export const getMascotaById = (request, response) =>{
    Mascota.findById( request.params.mascotaid, (error , mascota) =>{
         if (error){
             response.send(error)
         }else{
             response.json(mascota)
         }
    })
}

//ACTUALIZAR mascota POR ID
export const updateMascota = (request, response) => {
    Mascota.findOneAndUpdate(
             { _id: request.params.mascotaid},
        request.body,
        {
            new : true
        },
        (error, mascota) =>{
            if(error){
                response.send(error)
            }else{
                response.json(mascota)
            }
        } )
}

//delete 
export const deleteMascota = (request, response) => {
    Mascota.deleteOne({ _id: request.params.mascotaid},
        (error, mascota) => {
            if(error){
                response.send(error)
            }else{
                response.json({ mensaje : "borrado exitoso"})
            }
        })

        
}
