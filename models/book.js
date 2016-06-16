var mongoose = require('mongoose');

// book schema
var bookSchema = mongoose.Schema({
    title:{
        // S in string is uppercase
        type: String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    description:{
        type:String,

    },
    author:{
        type:String,
        required:true
    },
    pages:{
        type:String

    },
    img_url:{
        type:String
    },
    buy_url:{
        type:String
    },

    create_date:{
        type:Date,
        default:Date.now
    }
});
// now this object can be accesssed from outside
var Book = module.exports = mongoose.model('Book',bookSchema);

// GET Books, this needs to be accessible from outside

module.exports.getBooks =  function (callback, limit) {
    Book.find(callback).limit(limit);
};

// GET Book by Id for fetch a particular book.
module.exports.getBookById =  function (id,callback) {
    Book.findById(id,callback);
};

// add book
module.exports.addBook =  function (book,callback) {
    Book.create(book,callback);
};

//UPDATE
module.exports.updateBook =  function (id,book,options,callback) {
    var query ={_id:id};
    var update ={
        title:book.title,
        author:book.author,
        pages:book.pages,
        img_url:book.img_url,
        buy_url:book.buy_url,
        description:book.description,
        genre:book.genre
    };
    Book.findOneAndUpdate(query,update,options,callback);
};

// Delete
module.exports.removeBook =  function (id,callback) {
    var query = {_id: id};
    Book.remove(query, callback);
}