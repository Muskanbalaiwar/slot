const slot_table =require('../model/time');
const { Sequelize, Op, where } = require("sequelize");

exports.postData =async(req,res)=>{

      try{
        const data =await slot_table.findOne({where:{date:new Date(req.body._date),startTime:req.body._start,endTime:req.body._end}}) 
        if(data){
            return res.status(202).json({ status: 'error', message: "User already exists"});
         }
        
       
else{
       const date = req.body._date;
       const starTime =req.body._start;
       const endTime =req.body._end; 

       const time =await slot_table.findOne({where :{date :new Date(req.body._date)}});

       if(time){
            const time1 =await slot_table.findOne({where:{startTime:{[Op.lt]:endTime}}});
            const time2 =await slot_table.findOne({where:{endTime:{[Op.gt]:starTime}}});
            if(time1 && time2){
                  return res.status(202).json({ status: 'error', message: "User already exists"});
            }

            else{
                  const details =await slot_table.create({date :date,startTime:starTime,endTime:endTime});
                  res.status(201).json({data:details,message : 'slot booked'}); 
            }
       }

       else{

      
     
       const details =await slot_table.create({date :date,startTime:starTime,endTime:endTime});
      res.status(201).json({data:details,message:'slot booked'});}
 }}

      catch(err){
            console.log(err);
      }
}