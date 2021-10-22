'use strict';
 
module.exports = function(req,res,next){
  let query =req.query;
  if(query){
    next();
  }else{
   next('Invalid query');
  }
}