
var dbConn = require("./../../config/db.config");

//Leaves object create
var userlocation = function (loc) {
    this.Emp_Id = loc.Emp_Id;
    this.full_address = loc.full_address;
    this.state_name = loc.state_name;
    this.city_name = loc.city_name;
    this.latitude = loc.latitude;
    this.longitude = loc.longitude;
    this.distance = loc.distance;
    this.Active = loc.Active;
    this.created_date = new Date();
    this.created_by = loc.created_by;
};


userlocation.findAll = function (Emp_Id, result) {
  dbConn.query(
    "call hrms.getUserLocations(?);",
    Emp_Id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        // console.log("location : ", res);
     
        result(null, res);
      }
    }
  );
};


module.exports = userlocation;
