const ExtraT = require('../models/extra.model');


exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
  };
exports.extra_create = function (req, res) {
    let extra = new ExtraT(
    {
    age: req.body.age,
    famille: req.body.famille,
  	race: req.body.race,
    nourriture: req.body.nourriture
    }
    );

    extra.save(function (err) {
   if (err) {
    return next(err);
   }
res.send('Extraterrestrial Created successfully')
    })
};
exports.extra_details = function (req, res) {
    ExtraT.findById(req.params.id, function (err,extra) {
 if (err) return next(err);
 res.send(extra);
    })
};
exports.extra_update = function (req, res) {
    ExtraT.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, extra) {
  if (err) return next(err);
  res.send('Extraterrestrial udpated.');
    });
};

exports.extra_delete = function (req, res) {
    ExtraT.findByIdAndRemove(req.params.id, function (err) {
   if (err) return next(err);
    res.send('Deleted successfully!');
    })
};