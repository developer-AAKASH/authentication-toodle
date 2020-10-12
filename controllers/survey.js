const Survey = require("../models/survey");

exports.getSurveyById = (req, res, next, id) => {
  Survey.findById(id).exec((err, survey) => {
    if (err) {
      return res.status(400).json({
        error: "Survey not found in DB"
      });
    }
    req.survey = survey;
    next();
  });
};

exports.createSurvey = (req, res) => {
  const survey = new Survey(req.body);
  survey.save((err, survey) => {
    if (err) {
      return res.status(400).json({
        error: "NOT able to save Survey in DB"
      });
    }
    res.json({ survey });
  });
};

exports.getSurvey = (req, res) => {
  return res.json(req.survey);
};

exports.getAllSurvey = (req, res) => {
  Survey.find().exec((err, surveys) => {
    if (err) {
      return res.status(400).json({
        error: "NO surveys found"
      });
    }
    res.json(surveys);
  });
};


