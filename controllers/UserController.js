
import prisma from "../DB/db.config.js";

export const createUser = async(req,res)=>{
  const {name ,email,password} = req.body

  const findUser = await prisma.user.findUnique({
    where:{
        email:email
    }
  })
   if (findUser) {
      return res.json({status:400, msg:"email Already Taken .Please Provide New Email "})
   }

   const newUser = await prisma.user.create({
    data:{
        name,
        email,
        password
    }
   })
   return res.json({status:200, data:newUser , msg:"User Created"})
}

export const UpdateUser = async(req,res)=>{
  const {name, email,password}= req.body;

  await prisma.user.update({
    where:{
      id:Number(userId)

    },
    data:{
      name,
      email,
      password
    }
  })

  return res.json({status:200, msg:"User Updated SuccessFully"})

}