const express = require("express");
const breads = express.Router();

const Bread = require("../models/bread.js");

//INDEX -READ ALL
breads.get("/", (req,res) =>{
   // res.send(Bread);
   res.render("index",{
        breads: Bread,
   });
});

breads.get("/new", (req,res)=>{
   res.render("new");
});

// READ ONE?
breads.get("/:arrayIndex", (req,res)=>{
   const arrayIndex =req.params.arrayIndex;
   if(Bread[arrayIndex]){
      res.render("show", {
         bread:Bread[arrayIndex],
   });
 } else {
      res.send("404");
   }
   
});
//CREATE
breads.post("/",(req,res)=>{
   let newBread ={...req.body}; 
   if (newBread.hasGluten === "on"){
      newBread.hasGluten= true;
   } else if 
     (newBread.hasGluten === "off"){
     
      newBread.hasGluten= false;
   }else {
      console.error("Error: hasGluten value is", newBread.hasGluten);

     }
     Bread.push(newBread);
     res.redirect("/breads");
     
   }
);

// EXPORT
module.exports = breads;

