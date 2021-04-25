const Calendar = require("../model/calendar.js");

module.exports = {

    index: (req, res) => { 
    Calendar.find({}).then((appointments) => {
        res.json(appointments)
    }).catch(() => res.status(400).json({ error: "failed attempt!" }))
    },

    show: (req, res) => {    
    Calendar.findById(req.params).then((appointment) => {
        res.json(appointment ? appointment : {})
    }).catch((e) => res.status(400).json({error: "failed attempt!"}))
    },

    store: (req, res) => {
    const appointment = new Calendar({ date: req.body.date, time: req.body.time });
    appointment.save().then(() => {
        console.log('appointment scheduled'),
        res.status(201).send()
    }).catch((e) => res.status(400).json({error: "failed attempt!"}))
    },

    update: (req, res) => {
    Calendar.updateOne(req.params, req.body).then((result) => {
        if(result.nModified > 0 ) {
            res.json({updated: true})
        } res.json({updated: false})        
    }).catch((e) => res.status(400).json({error: "failed attempt!"}));     
    },

    destroy: (req, res) => {
    Calendar.deleteOne(req.params).then((result) => {
        if(result.deletedCount > 0) {
            res.json({deleted: true})
        } res.json({deleted: false})      
    }).catch((e) => res.status(400).json({error: "failed attempt - can't delete!"}));
    }
    
}