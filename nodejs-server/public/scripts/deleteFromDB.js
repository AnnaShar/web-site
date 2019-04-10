//const {deleteTeachersFromDB} = require('../connection-example');

function deleteRow(cell){
    let tr = cell.parentNode.parentNode;
    console.log(tr);
    let idDeleting = tr.getElementsByClassName('idRow')[0].textContent;
    console.log(idDeleting);
    deleteTeachersFromDB(idDeleting);
}
