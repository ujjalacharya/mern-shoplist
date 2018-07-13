const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const path = require('path')


//Import database file
const db = require('./config/db')

//Import routes
const items = require('./controller/routes/api/items');

//Connect to the database
mongoose.connect(db.mongoURI, { useNewUrlParser: true })
    .catch(err => console.log(err))
    .then(() => console.log('Successfully connected to the database'))

// BodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Handle routes
app.use('/api/items', items);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

//Server run
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})