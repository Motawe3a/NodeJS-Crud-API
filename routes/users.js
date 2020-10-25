const express = require('express');

const router = express.Router();

const users = [
    {
        firstName: "Ahmed",
        lastName: "Motawea",
        age: 27
    },
    {
        firstName: "Sam",
        lastName: "Smith",
        age: 30
    }
]

// all routes in here start with /users
router.get('/', (req, res) => {
res.send(users)
});

router.post('/', (req, res) => {
    const user = req.body;
    users.push(user);

    res.send(`User with the name ${user.firstName} added to the database!`)
});

module.exports = router;