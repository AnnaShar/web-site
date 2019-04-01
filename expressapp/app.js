// const express = require("express");
// const fs = require("fs");
// const bodyParser = require("body-parser");
// const hbs = require("hbs");
 const expressHbs = require("express-handlebars");
//
//
// const app = express();
// const urlencodedParser = bodyParser.urlencoded({extended: false});
//
// app.use(express.static(__dirname+"/public"));
//

//
// hbs.registerHelper("getTime", function(){
//     let time = new Date();
//     let hours = time.getHours();
//     let minutes = time.getMinutes();
//     let seconds = time.getSeconds();
//     if (minutes.length===1)
//         minutes='0'+minutes;
//     if (seconds.length===1)
//         seconds='0'+seconds;
//     let result = `real time is ${hours}:${minutes}:${seconds}`;
//     console.log(result);
//     return result;
// });
//
// app.use(function(request, response, next){
//    let now = new Date();
//    let hour = now.getHours();
//    let minutes = now.getMinutes();
//    let seconds = now.getSeconds();
//    let data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
//    console.log(data);
//    fs.appendFile("server.log", data+'\n', function(){});
//    next();
// });
//
// const router = express.Router();
//
// router.use("/create", function(request, response){
//    response.send("creating");
// });
//
// router.use("/:idProduct", function(request, response){
//     response.send(`Product ${request.params.idProduct}`);
// });
//
// app.use("/products", router);
//
// app.get("/register", urlencodedParser, function(request, response){
//     response.sendFile(__dirname + "/register.html")
// });
//
// app.post("/register", urlencodedParser, function (request, response){
//     if(!request.body) return response.sendStatus(400);
//     console.log(request.body);
//     response.send(`${request.body.userName} - ${request.body.userAge}`);
// });
//
// app.get("/", function(request, response) {
//     response.render("home.hbs");
// });
//
// app.use("/index",function (request, response) {
//     response.redirect("https://metanit.com")
// });
//
// app.get("/contact", function(request, response){
//     response.render("contact.hbs", {
//         title: "Мои контакты",
//         emailsVisible: true,
//         emails: ["gavgav@mycorp.com","myaki"],
//         phone: "+1234567890"
//     });
// });
//
// app.get("/woof", function(request, response){
//     response.status(404).send("ничегошицы");
// });
//
//
// app.listen(3000);

const express = require("express");
const hbs = require("hbs");

const app = express();

app.engine("hbs", expressHbs(
    {
        layoutsDir:"views/layouts",
        defaultLayout: "layout",
        extname:"hbs"
    }
))
app.set("view engine", "hbs");
hbs.registerPartials(__dirname+"/views/partials");

hbs.registerHelper("getTime", function(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if (minutes.length===1)
        minutes='0'+minutes;
    if (seconds.length===1)
        seconds='0'+seconds;
    let result = `real time is ${hours}:${minutes}:${seconds}`;
    console.log(result);
    return result;
});

app.set("view engine", "hbs");

app.get("/", function(request, response){

    response.render("home.hbs");
});

app.listen(3000);