const express = require("express");
//const bodyParser = require("body-parser");
const hbs =require("hbs");
//const expressHbs = require("express-handlebars");
const {getTeachersFromDB} = require("./connection-example.js")

const app = express();
//const urlencodedParser = bodyParser();

function getServer() {
    //console.log("i'm here");
    app.set("view engine", "hbs");

    app.get("/teachers", async function (request, response) {
        let teachers = await getTeachersFromDB();
        debugger;

        console.log(teachers);
        response.render('teachers.hbs', teachers);
    });

    app.listen(3000);
}

module.exports = {getServer}