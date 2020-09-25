let router = require('express').Router();

const work_record = require('../models/work_record.js');
//proxy here
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.get('/', (req, res) => {
  const name = req.query.name || 'World';
  // console.log('service.js line 5')
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello greeting ${name}! in service.js` }));
});
//});

// router.get('/', function(req, res) {
//    res.send('Service Index Page');
// });

router.get('/list', function(req, res) {
  test_user_id = 1;
  wr = new work_record(test_user_id);
  wr.getall().then(wr => {
    console.log("in crud wr.data====\n\n")
    //console.log(wr);
    console.log(JSON.stringify(wr.data))
    
    let ts = Date.now();
    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    let hour = date_ob.getHours();
    let minut = date_ob.getMinutes();
    let second = date_ob.getSeconds();

    console.log()
    //console.log(year + "-" + month + "-" + date + " " + hour+":"+minut+":"+second);
    //console.log()
    console.log("in crud end of wr(service_work_record.js)\n"+year + "-" + month + "-" + date + " " + hour+":"+minut+":"+second+"\n\n")


    res.send(JSON.stringify(wr.data));
  });
});

module.exports = router;
