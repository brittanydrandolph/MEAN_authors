const mongoose = require("mongoose")
const Authors = mongoose.model("Authors")
//only need to import one model

module.exports = {
    index: function(req, res){
        Authors.find()
            .then(authors => res.json({info: authors, message: "------ SUCCESS ON INDEX PAGE ------"}))
            .catch(err => res.json({info: err, message: "------FAILURE ON INDEX PAGE------"}))
    },
    details: function(req, res){
        let id = req.params.id;
        Authors.findById(req.params.id)
        .then(author => res.json({info: author, message: "Successfully found the author:", author}))
        .catch(err => res.json({info: err, message: "Failure locating an author"}))
    },
    addAuthor: function(req, res){
        Authors.create({name: req.body.name})
            .then(created => res.json({info: created, message: "success creating an author!"}))
            .catch(err => res.json({info: err, message: "Failure creating and author"}))
    },
    editAuthor: function(req, res){
        let id = req.params.id;
        Authors.findById(id, function(err, author){
            if(err){
                res.json({message: "Errors in finding and id to update!", info: err})
            }
            else{
                author.name = req.body.name;
                console.log("Updated author name:", author.name)
                author.save({runValidators: true },function(err){
                    console.log("Saved updated author")
                    if(err){
                        res.json({message: "errors in saving", info: err});
                    }
                    else{
                        res.json({message: "success in savings!", info: author})
                    }
                })
            }
        })
    },
    deleteAuthor: function(req, res){
        let id = req.params.id;
        Authors.remove({_id:id}, function(err){
            if(err){
                res.json({message: "Error in delete", info: err})
            }
            else{
                res.json({message: "success in deleting an author", info: true})
            }
        })
    }
}