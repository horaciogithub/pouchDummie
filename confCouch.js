
// ENLAZADO A COUCHDB https://pouchdb.com/getting-started.html
var db = new PouchDB('http://localhost:5984/gatunes');
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

