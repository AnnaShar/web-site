const mysql = require('mysql');

console.log('Get connection...');
const connection = mysql.createConnection({
    database:'school',
    host:'localhost',
    user:'root',
    password:'yfghbvth?djn'
});
function makeConnection() {
    //console.log("makeconnection");
    connection.connect(function (err) {
        if (err) throw err;
        console.log('Connected!');
    })
}

function insertIntoTable(tableName, tableFields, tableValues){
    connection.query('insert into ' + tableName + '('+ [tableFields] + ') values (?)', [tableValues], function(err, result){
        if (err) throw err;
        console.log("1 record inserted");
    })
}
function getTeachersFromDB(){
    connection.query("SELECT * FROM teacher", function (err, result) {
        if (err) throw err;
        console.log(result);
        return result;
    });
}
//insertIntoTable('teacher', ['firstName', 'surname', 'patronymic', 'phone'], ["Зю", "Зюшный", "Зюшевич", "00"]);
// connection.query('insert into teacher (firstName, surname, patronymic, phone) values ("Киса", "Мурная", "Мурковна", "meow")',
//     function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
// });


// connection.query("SELECT * FROM teacher", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
// });
module.exports={getTeachersFromDB, makeConnection}

