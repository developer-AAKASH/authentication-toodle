const express = require("express");
const router = express.Router();

const { getUserById, getUser, updateUser} = require("../controllers/user");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");

router.param("userId", getUserById);

router.get("/user/:userId",isSignedIn, getUser);
router.get("/users", getUser)
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);
module.exports = router;
