const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb:localhost/urlShortener', {
    useNewUrlParse: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/shortUrls', (req, res) => {

})

app.listen(process.env.PORT || 5000);

app.listen(3000, function(){
    console.log("info",'Server is running at port : ' + 5000);
});