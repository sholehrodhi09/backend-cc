import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const User = db.define('user', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull:false,
    validate:{
      notempety:true
    }
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
      type: DataTypes.CHAR
    },
  password: {
     type: DataTypes.STRING
  },
},
  {
      freezeTableName: true
  });
export default User;