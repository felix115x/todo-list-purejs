const express = require('express');
const app = express();

// TODO: Add database
const PORT = process.env.PORT || 3000;

app.use(express.json({ extended: false }));

app.use(express.static(__dirname + '/public'));
app.engine('.html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index.html');
});

// TODO: add API routes

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
