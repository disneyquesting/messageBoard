var express = require("express");
var router = express.Router();
var format = require('date-fns/format');

const messages = [
  {
    text: "Hello there!",
    user: "TLane169",
    added: format(new Date(), 'EEE h:mm'),
    avatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOWViYjUzOWMtMzRkZi00MjNkLTk4M2ItMTVkMDg5MzE2ZDYyXkEyXkFqcGdeQXVyODQwNjM3NDA@._V1_UY256_CR36,0,172,256_AL_.jpg'
  },
  {
    text: "S U P L O S E R",
    user: "AliWho?",
    added: format(new Date(), 'EEE h:mm'),
    avatar: 'https://randomuser.me/api/portraits/women/27.jpg'
  },
  {
    text: "SHREK",
    user: "DONKEY",
    added: format(new Date(), 'EEE h:mm'),
    avatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI3NTkyMDYyOF5BMl5BanBnXkFtZTgwNjkyNzc4OTE@._V1_UY256_CR10,0,172,256_AL_.jpg'
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board", messages: messages });
  next();
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post('/new', function(req,res,next){
  console.log(req.body.message);
  console.log(req.body.username)
  messages.push({text: req.body.message, user: req.body.username, added: format(new Date(), 'EEE h:mm'), avatar: req.body.avatarURL})
  res.redirect('/')
  console.log(messages)
});

module.exports = router;
