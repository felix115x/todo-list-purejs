const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let items = [
        {
            id: 1,
            title: 'Study',
            deadline: '23.09.2019',
            status: 'done'
        },
        {
            id: 2,
            title: 'Buy products',
            deadline: '23.09.2020',
            status: 'incomplete'
        },
        {
            id: 3,
            title: 'Something else',
            deadline: '23.09.2020',
            status: 'irrelevant'
        }
    ];
    res.json({ list: items });
    console.log(items);
});

router.put('/:id', (req, res) => {
    console.log(req.params)
    console.log(req.params.id + ' has been edited');
    res.json({ msg: 'Success! edited ' + req.param.id});
});

router.delete('/:id', (req, res) => {
    console.log(req.params.id + ' has been deleted');
    let alteredItems = [
        {
            id: 1,
            title: 'Study',
            deadline: '23.09.2019',
            status: 'done'
        },
        {
            id: 2,
            title: 'Buy products',
            deadline: '23.09.2020',
            status: 'incomplete'
        }
    ];
    res.json({ list: alteredItems });
});

module.exports = router;