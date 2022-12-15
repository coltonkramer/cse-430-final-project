const express = require('express')
const mongoose = require('mongoose');
const app = express();
const Climbs = require('./models/climbs')

mongoose.connect('mongodb+srv://coltonkramer:gtNLG1SGYMGF0PgI@contacts.5ik2eyo.mongodb.net/my-climbs?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to database!')
})
.catch(() => {
    console.log('Connection Failed!')
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE, OPTIONS')
    next();
})

app.get('/climbs', function(req,res){
    Climbs.find({}, function(err, climbs){
        if (err) {
            res.send(err);
        } else {
            if (!climbs) {
                res.send('Hey that climb does not exist');
            } else {
                res.send(climbs)
            }
        }
    })
});


module.exports = app;