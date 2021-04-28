const express = require('express')
const router = express.Router()
const calendarController = require("../controllers/calendarController.js")

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})


router.get("/calendar", calendarController.index);

router.post("/calendar", calendarController.store);

router.get("/calendar/:_id", calendarController.show);

router.put("/calendar/:_id", calendarController.update);

router.delete("/calendar/:_id", calendarController.destroy); 


module.exports = router