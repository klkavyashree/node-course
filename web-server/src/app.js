const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');

const app = express();

// Define paths for express config
const publicPathDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// setup handlebar and view location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


// setup static directory to serve
app.use(express.static(publicPathDirectory));

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weather app',
        name: "kavya"
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About Me',
        name: 'kavya'
    })
})

app.get('/help', (req, res)=>{
    res.send([
        {name: "kavya"},
        {name: "hello"}
    ])
})

app.get('/weather', (req, res)=>{
    if(!req.query.address){
        return res.send({
            error: "provide adress"
        })
    }
    geoCode(req.query.address, ({latitude, langitude})=>{
        forecast(latitude, langitude, (error, data)=>{
            if(!data){
                return res.send({error});
            }
            res.send({
                forecast: data,
                location: req.query.address,
            })
        })
    })
})


app.get('/about/*', (req, res)=>{
    res.render('error',{
        name: 'kavya',
        title: 'Error',
        message: 'about article not found',
    })
})

app.get('*', (req, res)=>{
    res.render('error',{
        message: 'Page not found',
        title: 'Error',
        name: 'kavya'
    })
})


app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})
