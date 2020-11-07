import mongoose from 'mongoose';

/*
La función mongoose.Schema () toma un objeto de definición de esquema como parámetro para generar un nuevo 
objeto de esquema Mongoose que especificará las propiedades o la estructura de cada documento en una colección. 
Discutiremos esta definición de esquema para la colección de usuarios antes de agregar cualquier código de 
lógica empresarial para completar el modelo de usuario.
*/

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email is required'
    },
    hashed_password: {
        type: String,
        required: "Password is required"
    },
    salt: String,
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('User', UserSchema);