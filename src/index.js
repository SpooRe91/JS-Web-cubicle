const express = require('express');
const handlebars = require('express-handlebars');
const routes = require('./routes');
const port = 5000;

const app = express();


app.use('/static', express.static('public'));

app.engine('hbs', handlebars.engine({
    extname: 'hbs'//!!!VERY IMPORTANT
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(routes);

app.get('/details/:params', (req, res) => {
    res.render('details');
});

app.get('/404', (req, res) => {
    res.status(404);
    res.render('404');
});

app.listen(port, console.log(`Listening on port http://localhost:${port}`))