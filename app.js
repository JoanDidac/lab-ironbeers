
const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.status(200).render('index');
})

app.get('/beers', (req, res) => {
  punkAPI.getBeers()
  .then(beers => {
    res.render('beers', {birra: beers})
  })
  .catch(error => {
    res.render('page500')
  })
});

app.get('/random', (req, res, next) => {
  punkAPI.getRandom()
  .then(beers => {
    res.render('random', {beer: beers [0]})
  })
  .catch(error => console.log(error))
})

app.listen(3011, () => console.log('Running‍ on port 3011 sir!'));

