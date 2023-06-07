import express from "express" ;
import db from "./config/database.js";
import router from "./routes/routes.js";
const app=express();

try {
    await db.authenticate();
    console.log("database connec");
} catch (error) {
    console.error(error);
    
}
app.use(express.json());
app.use(router);
app.listen(3000,()=>{
    console.log("Running port 3000");

})