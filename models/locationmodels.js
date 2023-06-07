import { Sequelize } from "sequelize";
import db from "../config/database";

const {DataTypes} = Sequelize;

const Location = db.define('location', {
    location_name: {
      type: DataTypes.STRING
    },
},
    {
        freezeTableName: true
    });
export default Location;