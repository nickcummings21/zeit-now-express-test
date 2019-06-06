const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());

app.get('*', (req, res) => {
  res.set('Content-Type', 'application/json');
  const character = {
    name: 'John Carter',
    origin: 'Mars',
    gender: 'male',
    race: 'human'
  };
  res.status(200).send(JSON.stringify(character));
});

module.exports = app;
