const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public'))); // mantenemos esto? 



// Register the location for handlebars partials here:

// ...

// Add the route handlers here:
// app.get('/', (req, res, next) => {
//   res.status(200).render('index');
// })

app.get('/home', (req, res, next) => {
  res.status(200).render('home');
})

app.get('/random', (req, res, next) => {
  res.status(200).render('random');
})


app.listen(3000, () => console.log('🏃‍ on port 3000'));
