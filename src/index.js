const express = require('express');
const handlebars = require('express-handlebars');
const port = 5000;

const app = express();

app.use('/static', express.static('public'));

app.engine('hbs', handlebars.engine({
    extname: 'hbs'//!!!VERY IMPORTANT
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.get("/", (req, res) => {
    res.render('index');
});

app.get('/create', (req, res) => {
    res.render('create');
});

app.get('/details/:params', (req, res) => {
    res.render('details');
});

// app.get('/about', (req, res) => {
//     res.render('about');
// });

app.get('/about', (req, res) => {
    res.status(404);
    res.render('404');
});

app.listen(port, console.log(`Listening on port http://localhost:${port}`))