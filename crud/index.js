const express = require('express');
const bodyParser = require('body-parser');
//const pino = require('express-pino-logger')();

// ////////////////////////////////
// const db=require('./crud.js')
// let user=require('./login/user')

// ////////////////////////////////

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(pino);

app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/service_work_record', require('./routes/service_work_record'));

/*
app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello greeting ${name}!` }));
});

/////////////////////////////////////
/*
app.get('/api/crud', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello greeting ${name}!` }));
});
*/

// ////////////////////////////////////
//* /

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001'),
);

// ///////////////////
