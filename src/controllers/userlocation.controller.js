
const userlocation=require('../models/userlocation.model');

exports.findAll = function(req, res) {
    console.log("param",req.params.Emp_Id)
    userlocation.findAll(req.params.Emp_Id,function(err, location) {
    console.log('controller')
    if (err)
    res.send(err);
    // console.log('res', location);
    res.send(location);
  });
};







