const router = require('express').Router();
//simple one....

const users = [
    { id: 1, name: 'user1' },
    { id: 2, name: 'user2' },
    { id: 3, name: 'user3' },
    { id: 4, name: 'user4' },
    { id: 5, name: 'user5' },
    { id: 6, name: 'user6' },
    { id: 7, name: 'user7' },
    { id: 8, name: 'user8' },
    { id: 9, name: 'user9' },
    { id: 10, name: 'user10' },
    { id: 11, name: 'user11' },
    { id: 12, name: 'user12' },
    { id: 13, name: 'user13' },
    { id: 14, name: 'user14' },
    { id: 15, name: 'user15' }
]




router.get('/users', (req, res) => {
    res.json(users)
})







module.exports = router;