const mysql = require('mysql');
const util = require('util');

console.log('Get connection...');
const connection = mysql.createConnection({
    database:'school',
    host:'localhost',
    user:'root',
    password:'yfghbvth?djn'
});

const query = util.promisify(connection.query).bind(connection);

function makeConnection() {
    //console.log("makeconnection");
    connection.connect(function (err) {
        if (err) throw err;
        console.log('Connected!');
    })
}

function insertIntoTable(tableName, tableFields, tableValues){
    console.log('from conn'+tableValues);
    connection.query('insert into ' + tableName + '('+ [tableFields] + ') values (?)', [tableValues], function(err, result){
        if (err) throw err;
        console.log("1 record inserted");
    })
}
async function getTeachersFromDB(){
  const rows = await query("SELECT * FROM teacher");
  return rows;
   /* return connection.query("SELECT * FROM teacher", function (err, result) {
        if (err) throw err;
        console.log(result);
        return result;
    });*/
}
function deleteTeachersFromDB(id){

        let sql = "DELETE FROM teachers WHERE idTeacher = " + id;
        query(sql, function (err, result) {
            if (err) throw err;
            console.log("Number of records deleted: " + result.affectedRows);
        });

}


/*(async () => {
    try {
        const rows = await query('select count(*) as count from file_managed');
        console.log(rows);
    } finally {
        conn.end();
    }
})()*/


/*insertIntoTable('teacher', ['firstName', 'surname', 'patronymic', 'phone'], ["Зю", "Зюшный", "Зюшевич", "00"]);
connection.query('insert into teacher (firstName, surname, patronymic, phone) values ("Киса", "Мурная", "Мурковна", "meow")',
    function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
});
*/
module.exports={getTeachersFromDB, makeConnection, insertIntoTable, deleteTeachersFromDB}

