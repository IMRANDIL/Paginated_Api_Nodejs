

const router = require('express').Router();
const mongoose = require('mongoose');

const User = require('../db/users');
mongoose.connect(process.env.URI);




router.get('/users', paginatedResults(User), (req, res) => {

    res.json(res.paginatedResults)
})




const db = mongoose.connection;

db.once('open', async () => {
    if (await User.countDocuments().exec() > 0) return;

    Promise.all([
        User.create({ name: `user1` }),
        User.create({ name: `user2` }),
        User.create({ name: `user3` }),
        User.create({ name: `user4` }),
        User.create({ name: `user5` }),
        User.create({ name: `user6` }),
        User.create({ name: `user7` }),
        User.create({ name: `user8` }),
        User.create({ name: `user9` }),
        User.create({ name: `user10` }),
        User.create({ name: `user11` }),
        User.create({ name: `user12` }),
        User.create({ name: `user13` }),
        User.create({ name: `user14` }),
        User.create({ name: `user15` }),

    ]).then(() => console.log(`added users`)).catch((err) => console.log(err));
})















//middleware...


function paginatedResults(model) {
    return async (req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const startIndex = (page - 1) * limit;
        const endEndex = page * limit;

        const results = {};
        if (endEndex < await model.countDocuments().exec()) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }


        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }

        try {
            results.results = await model.find().limit(limit).skip(startIndex).exec()
            res.paginatedResults = results;
            next();
        } catch (e) {
            res.status(500).json({ message: e.message })
        }


    }
}













module.exports = router;






























//simple one....

// const users = [
//     { id: 1, name: 'user1' },
//     { id: 2, name: 'user2' },
//     { id: 3, name: 'user3' },
//     { id: 4, name: 'user4' },
//     { id: 5, name: 'user5' },
//     { id: 6, name: 'user6' },
//     { id: 7, name: 'user7' },
//     { id: 8, name: 'user8' },
//     { id: 9, name: 'user9' },
//     { id: 10, name: 'user10' },
//     { id: 11, name: 'user11' },
//     { id: 12, name: 'user12' },
//     { id: 13, name: 'user13' },
//     { id: 14, name: 'user14' },
//     { id: 15, name: 'user15' }
// ]




// const posts = [
//     { id: 1, post: 'post1' },
//     { id: 2, post: 'post2' },
//     { id: 3, post: 'post3' },
//     { id: 4, post: 'post4' },
//     { id: 5, post: 'post5' },
//     { id: 6, post: 'post6' },
//     { id: 7, post: 'post7' },
//     { id: 8, post: 'post8' },
//     { id: 9, post: 'post9' },
//     { id: 10, post: 'post10' },
//     { id: 11, post: 'post11' },
//     { id: 12, post: 'post12' },
//     { id: 13, post: 'post13' },
//     { id: 14, post: 'post14' },
//     { id: 15, post: 'post15' }
// ]




// router.get('/posts', paginatedResults(posts), (req, res) => {
//     res.json(res.paginatedResults);
// })
