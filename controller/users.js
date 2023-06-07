import User from "../models/usersmodel.js";
import bcrypt from "bcrypt";



export const getUser = async (req, res) => {
    try {
        const response = await User.findAll();
        res.json(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
export const getUserByid =async (req, res)=>{
    try {
        const response = await User.findOne({
            where:{
                id:req.params.user_id
            }
        });
        res.json(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
    
}
export const Register = async (req, res) => {
    const { name, email, password, confir } = req.body;
    if (password!==confir) return res.status(400).json({msg :"password tidak valid"});
    const salt=await bcrypt.genSalt();
    const hashpassword = await bcrypt.hash(password, salt);
    try {
        await User.create({
            name: name,
            email: email,
            password: hashpassword
        });
        res.json({ msg: "Register Berhasil" });
    } catch (error) {
        console.error(error);
    }
}
