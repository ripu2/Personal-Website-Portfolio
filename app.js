const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const query = require('./models/contact')
const app = express();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("Index")
})
app.get("/contact", (req, res) => {
    res.render("ContactMe")
})
app.post("/contact", (req, res) => {
    var data = new query(req.body)
    data.save().then(() => {
        res.redirect("/")
    }).catch(

    )
})
app.get("/projects", (req, res) => {
    res.render("Projects")

})

app.listen(3000, () => {
    console.log("server is up")
})