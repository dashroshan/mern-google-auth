const express = require("express");
const passport = require("passport");
const router = express.Router();

// To be used as the login button link
router.get(
    "/login",
    passport.authenticate(
        "google",
        {
            hd: "iiit-bh.ac.in",
            prompt: "select_account",
            scope: ["profile", "email"]
        }
    )
);

// Send get request to logout
router.get(
    "/logout",
    (req, res) => {
        const wasLoggedIn = req.isAuthenticated();
        req.logout();
        res.send({ loggedOut: true, wasLoggedIn: wasLoggedIn });
    }
);

// Send get request to check if user is logged in
router.get(
    "/check",
    (req, res) => {
        let email = "none";
        if (req.user) email = req.user.email;
        res.send({ isLoggedIn: req.isAuthenticated(), email: email });
    }
);

// For google redirection handling
router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "http://localhost:3000?afterLogging=true&iiitDomain=false" }),
    (req, res) => {
        res.redirect("http://localhost:3000?afterLogging=true&iiitDomain=true");
    }
);

module.exports = router;