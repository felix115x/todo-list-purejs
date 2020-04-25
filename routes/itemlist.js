const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let items = [
        {
            title: 'Study',
            deadline: '23.09.2019',
            status: 'done'
        },
        {
            title: 'Buy products',
            deadline: '23.09.2020',
            status: 'incomplete'
        },
        {
            title: 'Something else',
            deadline: '23.09.2020',
            status: 'irrelevant'
        }
    ];
    res.json({ list: items });
    console.log(items);
});

module.exports = router;