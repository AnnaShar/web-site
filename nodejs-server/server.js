const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const expressHbs = require("express-handlebars");
const {getTeachersFromDB, insertIntoTable} = require("./connection-example.js")

const app = express();
app.use(express.static(__dirname+"/public"));
const urlencodedParser = bodyParser();

app.engine("hbs", expressHbs(
    {
        layoutsDir:"views/layouts",
        defaultLayout: "layout",
        extname:"hbs"
    }
));

function getServer() {
    app.set("view engine", "hbs");

    app.get("/teachers", async function (request, response) {
        let teachers =  await getTeachersFromDB();

        /*let stringTeachers = JSON.stringify(teachers);
        let normalTeachers = JSON.parse(stringTeachers);
        console.log(normalTeachers);*/
        response.render('teachers.hbs', teachers);
    });

    app.post("/teachers", urlencodedParser, function (request, response) {
        if(!request.body) return response.sendStatus(400);

        let table = 'teacher';
        let fields = ['firstName', 'surname', 'patronymic', 'phone'];
        let fieldsValues = [request.body.userName,request.body.userSurname,request.body.userPatronymic,request.body.userPhone];
        let fieldsValues1 = ["Зю", "Зюшный", "Зюшевич", "00"];
        console.log(fields);
        console.log(fieldsValues);
        //console.log(fieldsValues1);

        insertIntoTable(table, fields, fieldsValues);
        response.status(204).send();
        //response.send(`${request.body.userName} - ${request.body.userSurname}-${request.body.userPhone}`);
    });

    app.listen(3000);
}

module.exports = {getServer}