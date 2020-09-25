const router = require('express').Router();

router.get('/', function(req, res) {
  res.send('Index Page');
});

router.get('/about', function(req, res) {
  res.send('About Page');
});

router.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello greeting ${name}! in index.js` }));
});

module.exports = router;
