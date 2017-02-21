const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost/restaurantsApp';

MongoClient.connect(dbUrl, (err, db) => {
  if (err) {
    console.log('well, shit');
    console.log(err);
    return;
  }

  const newReview = {
    author: 'Nizar',
    rating: 5,
    restaurant: 'Wendy\'s',
    comment: 'Good bang for your buck.'
  };

  db.collection('reviews').insertOne(newReview, (err, newDoc) => {
    if (err) {
      console.log('well, shit');
      console.log(err);
      return;
    }

    console.log('insertOne Success');
  });

    console.log('Cnxt established...');
  // db.close();
});
