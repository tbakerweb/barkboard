const express = require('express')
const router = express.Router()
// const baseballcard = require('../models/baseballcard')

// Getting all baseballcards
router.get('/', async (req, res) => {
    try {

        let filter;
        let limit;
        let sort;

        // Set Filter
        if (req.query.filter) {
            filter = JSON.parse(req.query.filter);
        } else {
            filter = {}
        }

        // Set Limit
        if (JSON.parse(req.query.limit)) {
            limit = JSON.parse(req.query.limit);
        } else {
            limit = 0;
        }

        // Set sort
        if (req.query.sort) {
            sort = JSON.parse(req.query.sort);
        } else {
            sort = { _id: 1 }
        }

        // Find baseball card
        // console.log(filter, limit, sort);
        const baseballcards = await baseballcard.find(filter).limit(limit).sort(sort);
        res.send(baseballcards);

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});


// Creating one baseballcard
router.post('/', async (req, res) => {
    
    
    try {
        const newbaseballcard = await baseballcard.create(req.body);
        res.status(201).json(newbaseballcard);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

// Getting one baseballcard
router.get('/:id', getbaseballcard, (req, res) => {
    res.send(res.baseballcard)
});

// // Updating one baseballcard
// router.patch('/:id', getbaseballcard, async (req, res) => {
//     if (req.body.name != null) {
//         res.baseballcard.name = req.body.name
//     }

//     // if (req.body.subscribedChannel != null) {
//     //     res.baseballcard.subscribedChannel = req.body.subscribedChannel;
//     // }
//     // try {
//     //     const updatedbaseballcard = await res.baseballcard.save();
//     //     res.send(updatedbaseballcard);
//     //     console.log(res.body);
//     // } catch {
//     //     res.status(400).json({ message: err.message });
//     // }

// })
// Deleting one baseballcard
router.delete('/:id', getbaseballcard, async (req, res) => {
    try {
        await res.baseballcard.remove();
        res.send({ message: 'Deleted This baseballcard' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function for gettig baseballcard baseballcard by ID
async function getbaseballcard(req, res, next) {
    try {
        baseballcard = await baseballcard.findById(req.params.id);
        if (baseballcard == null) {
            return res.status(404).json({ message: 'Cant find baseballcard' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.baseballcard = baseballcard;
    next();
};

module.exports = router;