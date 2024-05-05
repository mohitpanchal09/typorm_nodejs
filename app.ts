import express, {Request, Response} from "express";
import { DataSource } from "typeorm";
// import { User } from "./entities/User";

const app = express()
const PORT = 8080

//connect to db

// 1st method 

const connection = new DataSource({
    type:"mysql",
    username:"root",
    password:"123456",
    host:"localhost",
    port:3306,
    database:"tutorial",
    synchronize: true,
    logging: true,
    // entities:[User],
    entities:['./entities/*.ts']
})
connection.initialize()
.then(()=>{
    console.log('db connected...')
})
.catch((err)=>{
    console.error(err)
})

// 2nd method =>ormfonfig.json/ormfonfig.ts

// const connection = new DataSource()

// connection.initialize()
// .then(()=>{
//     console.log('db connected...')
// })
// .catch((err)=>{
//     console.error(err)
// })

// 3 write typeorm config in .env





app.listen(PORT,():void=>{
    console.log('server is running at '+ PORT)
})
