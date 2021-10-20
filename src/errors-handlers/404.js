'strict use';


module.exports = function (err,req,res,next){
  // response.status(404).send('Not-Found');
  response.status(404);
  response.end();
}
