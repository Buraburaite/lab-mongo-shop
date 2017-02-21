const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost/restaurantsApp';

MongoClient.connect(dbUrl, (err, db) => {
  if (err) {
    console.log('well, shit');
    console.log(err);
    return;
  }

  console.log('Hello World!');
  db.close();
});
