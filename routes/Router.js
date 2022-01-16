const { route } = require('express/lib/application');

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




const posts = [
    { id: 1, post: 'post1' },
    { id: 2, post: 'post2' },
    { id: 3, post: 'post3' },
    { id: 4, post: 'post4' },
    { id: 5, post: 'post5' },
    { id: 6, post: 'post6' },
    { id: 7, post: 'post7' },
    { id: 8, post: 'post8' },
    { id: 9, post: 'post9' },
    { id: 10, post: 'post10' },
    { id: 11, post: 'post11' },
    { id: 12, post: 'post12' },
    { id: 13, post: 'post13' },
    { id: 14, post: 'post14' },
    { id: 15, post: 'post15' }
]




router.get('/posts', paginatedResults(posts), (req, res) => {
    res.json(res.paginatedResults);
})

//middleware...


function paginatedResults(model) {
    return (req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const startIndex = (page - 1) * limit;
        const endEndex = page * limit;

        const results = {};
        if (endEndex < model.length) {
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



        results.results = model.slice(startIndex, endEndex);
        res.paginatedResults = results;
        next();
    }
}






router.get('/users', paginatedResults(users), (req, res) => {

    res.json(res.paginatedResults)
})







module.exports = router;