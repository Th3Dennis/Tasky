var express = require("express");
var router = express.Router();
const PrismaClient = require("@prisma/client").PrismaClient;
const prisma = new PrismaClient();

/* POST Add task */
router.post("/", function (req, res) {
  prisma.task
    .create({
      data: {
        title: req.body.title,
        description: req.body.description,
        userEmail: req.body.user,
      },
    })
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((error) => {
      //log error
      console.log(error);
      res.status(500).json(error);
    });
});


module.exports = router;