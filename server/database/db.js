import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
// const PASSWORD = 'codeforinterview';

 
const Connection = () =>{
    

    const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.eswyvev.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URL, {useNewUrlParser: true});
    mongoose.connection.on('connected', ()=>{
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', ()=>{
        console.log('Database disconnected')
    })

    mongoose.connection.on('error', ()=>{
        console.log('Error while connecting with the db');
    })
}


export default Connection;