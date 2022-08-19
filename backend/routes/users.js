var express = require('express');
var router = express.Router();
const PrismaClient = require('@prisma/client').PrismaClient;
const prisma = new PrismaClient();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Post create user. */
router.post('/', function(req, res, next) {
  prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
    }, 
  }).then(user => {
    res.json(user);
  }).catch(error => {
    res.json(error);
  })
});


module.exports = router;
