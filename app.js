const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const port = 8001;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.get("/api/calendar", (req, res) => {    
    res.json([{"cumprimento": "olá do node"}])
});

app.post("/api/calendar", (req, res) => {
    console.log(req.body)
    res.json([{"cumprimento": "fiz um post!"}])
});

app.get("/api/calendar/:id", (req, res) => {
    console.log(req.body)
    console.log(req.params)
    res.json([{"cumprimento": "olá do id"}])
});

app.put("/api/calendar/:id", (req, res) => {
    console.log(req.body)
    console.log(req.params)
    res.json([{"cumprimento": "olá do id"}])
});

app.delete("/api/calendar/:id", (req, res) => {
    console.log(req.body)
    console.log(req.params)
    res.json([{"error": "não implementado"}])
});

app.listen(port, () => {
    console.log(`Example listening at http://localhost:${port}`)
});
 