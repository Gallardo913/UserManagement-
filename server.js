require('dotenv').config()
const express= require('express');
const morgan = require('morgan');
const bodyparser= require('body-parser');
const path = require('path');

const app = express();

const PORT= process.env.PORT || 3000


//log requests
app.use(morgan('tiny'));

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine", "ejs")

//load publics
app.use('/css', express.static(path.resolve(__dirname,"publics/css")))
app.use('/img', express.static(path.resolve(__dirname,"publics/img")))
app.use('/js', express.static(path.resolve(__dirname,"publics/js")))

//allows us to render HTML file
app.get('/', (req, res) => {
    res.render("index");
})

app.listen(3000, () => {console.log(`Is your server running on http://localhost:${3000}`)});