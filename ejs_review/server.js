const express = require('express');
const app = express();


/*
******************
Routes start here
******************
*/

//write me a slash route that renders this home.ejs template
app.get('/', (req, res) => {
    res.render('home.ejs');
});


/*
The types of squids we learned about on monday
squid type 1: <%= this for producing a VALUE
squid type 2: <% this is for executing javascript code. IT DOES NOT produce an VALUE
both squids ends with %>
*/

app.get('/blueberry', (req, res) => {
    res.render('blueberry.ejs', { color: 'red' });
});

/*
you do:
create a route called /fruit which render a fruit.ejs file 
which displays your fav fruit.
*/
app.get('/fruit', (req, res) => {
    res.render('fruit.ejs', { fruit: ['orange','apples','white peach'] });
});


app.get('/fruits', (req, res) => {
    res.render('fruits.ejs', { fruits: ['orange','apples','white peach'] });
});


app.get('/instructors', (req, res) => {
    res.render('instructors.ejs', { instructors: ['kyle','alex','joy','denis','david'] });
});




const PORT = 3000;
app.listen(PORT, () => {
    `listening on port: ${PORT}`
});

