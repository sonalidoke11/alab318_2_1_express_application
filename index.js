import express from "express"
import morgan from "morgan"
//import bodyParser from 'body-parser'
//const bodyParser = require('body-parser');

const app = express();
const PORT = 4000

//setup views
app.set('view engine', 'pug');
app.set('views', './views');

//middleware
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

//routes
app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/packages', (req,res)=>{
    res.render('packages')
})

app.get('/site-1', (req,res)=>{
    res.render('site-1')
})

app.get('/site-2', (req,res)=>{
    res.render('site-2')
})

app.post('/submit-form', (req, res) => {
    console.log(req.body);
    res.send("Form submitted successfully!");
});

app.get('/downloadImg', (req,res)=>{
    res.download('./public/waterfall.jpg')
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));