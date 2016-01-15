require('dotenv').load();
var express = require('express');
var router = express.Router();
var config = require('../knexfile');

var knex = require('knex')(config.development);



/* GET home page. */
router.get('/', function(req, res, next) {
  knex.select('*')
  .from('greenit-posts')
  .then(function(info){
     res.render('index', { title: 'Recent Posts' });
   }); 
});









module.exports = router;
