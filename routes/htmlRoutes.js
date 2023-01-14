// Adds requirements for pat and express.js
const path = require('path');
const router = require('express').Router();

//This will send any added/saved notes, to the HTML file, for display to the end user
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

module.exports = router;