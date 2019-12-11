const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

/* Un middleware es una instrucción o un callback que se va a ejecutar siempre */
app.use(express.static(__dirname + '/public'));
// Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/',(req, res) => {
    //res.send('Hola Mundo');
    //let salida = {
    //    nombre: 'Diego',
    //    edad: 32,
    //    url: req.url
    //}

    res.render('home', {
        nombre: 'friend'
    });
});

app.get('/about',(req, res) => {

    res.render('about');
});


app.listen(/* puede ser cualquier puerto */ port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});