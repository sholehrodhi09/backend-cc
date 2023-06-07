import { Sequelize } from "sequelize";

const db = new Sequelize('eksflorasi','root','',{
    host:"localhost",
    dialect:"mysql"
});
export default db;