var express = require("express")
var router = express.Router();

const { getSurveyById, createSurvey, getSurvey, getAllSurvey } = require("../controllers/survey");
const { getUserById} = require("../controllers/user");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");

//params
router.param("userId", getUserById);
router.param("surveyId", getSurveyById);

//actual routes 

//create
router.post("/survey/create/:userId", isSignedIn,isAuthenticated, createSurvey);

//read
router.get("/survey/:surveyId", getSurvey, isSignedIn, isAuthenticated);
router.get("/surveys", getAllSurvey, isSignedIn, isAuthenticated);

module.exports  = router;
