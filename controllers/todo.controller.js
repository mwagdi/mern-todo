const Todo = require('../models/todo');

const getTodos = (req, res, next) => {
    Todo.find({}, {})
      .then(data => res.json(data))
      .catch(next)
}

const addTodo = (req, res, next) => {
    if(req.body.action){
       const todo = {
           action: req.body.action,
           done: false
       } 
      Todo.create(req.body)
        .then(data => res.json(data))
        .catch(next)
    }else {
      res.json({
        error: "The input field is empty"
      })
    }
}

const done = (req,res,next) => {
    Todo.findByIdAndUpdate(
        // the id of the item to find
        req.params.id,
        
        // the change to be made. Mongoose will smartly combine your existing 
        // document with this change, which allows for partial updates too
        {done: true},
        
        // an option that asks mongoose to return the updated version 
        // of the document instead of the pre-updated one.
        {new: true},
        
        // the callback function
        (err, todo) => {
        // Handle any possible database errors
            if (err) return res.status(500).send(err);
            return res.send(todo);
        }
    )
}

const deleteTodo = (req, res, next) => {
    Todo.findOneAndDelete({"_id": req.params.id})
      .then(data => res.json(data))
      .catch(next)
}

module.exports = {
    getTodos,
    addTodo,
    deleteTodo,
    done
}