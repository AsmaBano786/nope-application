const express = require('express')
const router = express.Router();
const userlocationController=require('../controllers/userlocation.controller');
// Retrieve all leaves
router.get('/:Emp_Id', userlocationController.findAll);
module.exports = router;
