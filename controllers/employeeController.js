const express = require('express');

var router = express.Router();

var {Employee} = require('../models/employee');

router.get('/', (req,res)=>{

    Employee.find((err,docs)=>{
   
        if(!err){

            res.send(docs);
        }

        else{

            console.log("error in retreiving Employees "+ JSON.stringify(err,undefined,2));
        }


    });
});


router.post('/',(req,res)=>{
  
    var emp = new Employee({
     
        name:req.body.name,
        position:req.body.position,
        office: req.body.office,
        salary:req.body.salary

    });

    emp.save((err,docs)=>{


        if(!err)
          {

            res.send(docs);

          }

          else{

            console.log("error in posting "+ JSON.stringify(err,undefined,2));
          }
    })


})

module.exports = router;