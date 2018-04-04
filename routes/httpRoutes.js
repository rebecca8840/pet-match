var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});
router.get('/rescues', (req, res) => {
    res.render('rescues');
});
router.get('/rescueDetails', (req, res) => {
    res.render('rescueDetails');
});
router.get('/events', (req, res) => {
    res.render('events');
});
router.get('/eventDetails', (req, res) => {
    res.render('eventDetails');
});
router.get('/addEvent', (req, res) => {
    res.render('addEvent');
});
router.get('/profile', (req, res) => {
    res.render('profile');
});
router.get('/login', (req, res) => {
    res.render('login');
});
router.get('/register', (req, res) => {
    if (req.session.userId) {
        res.redirect('/'); // logged in users can't register, DUH!
    } else if (!req.session.oauthId) {
        res.redirect('/login'); // User must oauth before creating an account here.
    } else {
        var datums = {
            displayName: req.session.oauthDisplayName,
        };
        if (req.session.authType == 'google') {
            // datums.firstName = req.session.oauthProfile.name.givenName || "";
            // datums.lastName = req.session.oauthProfile.name.familyName || "";
        }
        res.render('register', datums);
    }    
});
router.get('/test', (req, res) => {
    res.render('test', {
        eventData: {
            name: "Event name",
            datestring: "11/11/11 11:11 AM",
            link: "http://website.com/thingymcstuffalot",
            addressLines: ['10 street lane', 'New York, NY 10108'],
            descriptionLines: [
                "This is totally an event at a place and you're reading the description.",
                "I just wanted to actually see some text on the page, kthxbie."
            ],
            descriptionText: "This is totally an event at a place and you're reading the description.\nI just wanted to actually see some text on the page, kthxbie."
        }
    });
});

module.exports = router;