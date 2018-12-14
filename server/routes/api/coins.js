const Coin = require('../../models/Coin');

module.exports = (app) => {
  app.get('/api/coins', (req, res, next) => {
    Counter.find()
      .exec()
      .then((coin) => res.json(coin))
      .catch((err) => next(err));
  });

  app.post('/api/coins', function (req, res, next) {
    const coin = new Coin();

    coin.save()
      .then(() => res.json(coin))
      .catch((err) => next(err));
  });

  app.delete('/api/coins/:id', function (req, res, next) {
    Coin.findOneAndRemove({ _id: req.params.id })
      .exec()
      .then((coin) => res.json())
      .catch((err) => next(err));
  });

  app.put('/api/coins/:id/update', (req, res, next) => {
    Coin.findById(req.params.id)
      .exec()
      .then((coin) => {
        coin.country = req.params.country;

        coin.save()
          .then(() => res.json(coin))
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });
/*
  app.put('/api/counters/:id/decrement', (req, res, next) => {
    Counter.findById(req.params.id)
      .exec()
      .then((counter) => {
        counter.count--;

        counter.save()
          .then(() => res.json(counter))
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  }); */
};
