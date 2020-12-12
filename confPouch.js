
// https://pouchdb.com/guides/setup-pouchdb.html
// https://github.com/pouchdb/pouchdb-server

/* Pasos
    1 - npm install -g pouchdb-server
    2 - pouchdb-server
    3 - Ir a -> http://127.0.0.1:5000/_utils/
*/

var db = new PouchDB('http://localhost:5000/gatunes');
var doc =
{

    "_id": "gatos",
    "gatos": [
        {
            "name": "Oliver",
            "age": 1,
            "hobbies": [
                "Dormir",
                "Comer",
                "Jugar con su palito de jugar"
            ]
        }, 
        {
            "name": "Java",
            "age": 1,
            "hobbies": [
                "Dormir",
                "Comer"
            ]
        }
    ]
}

db.put(doc);

db.info().then(function (info) {
    console.log('INFO...', info);
    document.getElementById('display').innerHTML = 'We have a database: ' + JSON.stringify(info);
});

db.get('gatos').then(function (res) {
    console.log(res);
});

