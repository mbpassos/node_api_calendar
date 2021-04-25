const express = require("express");
const mongoose = require('mongoose');
const calendarController = require("./controllers/calendarController.js")
const Calendar = require("./model/calendar.js")
const app = express();
const port = 8001;

mongoose.connect('mongodb://localhost:27017/calendar_app', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    console.log(err)
});

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.get("/api/calendar", calendarController.index);

app.post("/api/calendar", calendarController.store);

app.get("/api/calendar/:_id", calendarController.show);

app.put("/api/calendar/:_id", calendarController.update);

app.delete("/api/calendar/:_id", calendarController.destroy); 

app.listen(port, () => {
    console.log(`Example listening at http://localhost:${port}`)
});
 