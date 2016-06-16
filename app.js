var express = require('express');
// we need an object to represent the app
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));

// bootstrap bodyparser
app.use(bodyParser.json());

 Genre = require('./models/genre');
Book = require('./models/book');

// connect to mongoose by defining the location of the database which is localhost/bookstore(localhost is the project module itself)
mongoose.connect('mongodb://localhost/bookstore');
// now we need a database object
var db = mongoose.connection;

// start mongodb by localating C:\MongoDB\Server\3.2\bin\mongod.exe
// now setup the route for actual homepage
// app.get will handle all the get request.
// app.get(/) represents the homepage which  takes a function which takes request and response as argument.
//res.send will sent it to the browser.

// Genre-------->
app.get('/',function (req,res) {
    res.send('use /api/books or /api/genres');
});

app.get('/api/genres',function (req,res) {
    Genre.getGenres(function (err, genres) {
        if(err){
            throw err;
        }
        console.log(genres);
        res.json(genres);
    });
});
// to add genre>post request
app.post('/api/genres',function (req,res) {
    // this is where body parser comes in..req.body
    var genre = req.body;
    Genre.addGenre(genre,function (err, genre) {
        if(err){
            throw err;
        }
        console.log(genre);
        res.json(genre);
    });
});
// update genre({} for options)

app.put('/api/genres/:_id',function (req,res) {
    // this is where body parser comes in..req.body
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id,genre,{},function (err, genre) {
        if(err){
            throw err;
        }
        console.log(genre);
        res.json(genre);
    });
});

// Delete
app.delete('/api/genres/:_id',function (req,res) {
    // this is where body parser comes in..req.body
    var id = req.params._id;
    Genre.removeGenre(id,function(err, genre) {
        if(err){
            throw err;
        }
        console.log(genre);
        res.json(genre);
    });
});



/////BOOKS  ------------------------------------>
app.get('/api/books',function (req,res) {
    Book.getBooks(function (err, books) {
        if(err){
            throw err;
        }
        console.log(books);
        res.json(books);
    });
});
// GET
app.get('/api/books/:_id',function (req,res) {
    Book.getBookById(req.params._id,function (err, book) {
        if(err){
            throw err;
        }
        console.log(book);
        res.json(book);
    });
});

//ADD-> post book
app.post('/api/books',function (req,res) {
    // this is where body parser comes in..req.body
    var book = req.body;
    Book.addBook(book, function (err, book) {
        if (err) {
            throw err;
        }
        console.log(book);
        res.json(book);
    });
});
// UPDATE->PUT
app.put('/api/books/:_id',function (req,res) {
    // this is where body parser comes in..req.body
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id,book,{},function (err, book) {
        if(err){
            throw err;
        }
        console.log(book);
        res.json(book);
    });
});
// Delete
app.delete('/api/books/:_id',function (req,res) {
    // this is where body parser comes in..req.body
    var id = req.params._id;
    Book.removeBook(id,function(err, book) {
        if(err){
            throw err;
        }
        console.log(book);
        res.json(book);
    });
});





app.listen(5000);
console.log('running at port 5000');

// this all we need to run our app
// go to commmand prommpt and run -> node app and after that go to the browser and run on local host 3000

