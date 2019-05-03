const axios = require("axios");
const router = require("express").Router();

router.post("/search", (req, res) => {
    // res.status(200).json([]);
    console.log('Params', req.body.title);
    axios
        .get(`https://www.googleapis.com/books/v1/volumes?q="${req.body.title}"`)
        .then(({
            data: {
                items
            }
        }) => {
            res.json(items)
        })
        .catch(err => res.status(422).json(err));
});

module.exports = router;