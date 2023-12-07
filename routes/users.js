var express = require('express');
var router = express.Router();

const{landingPage,homePage}=require('../controller/userContoller')

/* GET home page. */
router.get('/',landingPage);

router.get('/home',homePage)


// router.get('/', function(req, res, next) {
//   res.render('user/homePage');
// });

module.exports = router;
