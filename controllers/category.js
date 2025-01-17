const {Category} = require('../models/Category');

const dayjs = require('dayjs');
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

// RESTFUL API's

exports.category_add_get = (req, res) => {
    res.render('category/add');
}

exports.category_add_post = async (req, res) => {  
    console.log("req.body");  

    console.log(req.body);  

    let category = new Category(req.body);

    category.save()
    .then((category) =>{
        res.json({category})
    })
    .catch((err) =>{
        console.log(err);
        res.send("Please try again later!!!")
    })
}

exports.category_index_get = (req, res) => {
    Category.find()
    .then((categories) => {
        res.json({categories})
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.category_show_get = (req, res) => {
    console.log(req.query.id);
  
    Category.findById(req.query.id)
    .then((category) => {
        console.log(category)
        res.render('category/detail', {category, dayjs})
    })
    .catch((err) => {
        console.log(err);
    })

}

exports.category_delete_get = (req, res) => {
    console.log(req.query.id); 
    Category.findByIdAndDelete(req.query.id)
    .then((category) => {
        res.json({category})
    })
    .catch((err) => {
        console.log(err);
    });
}

exports.category_edit_get = (req,res) => {
    Category.findById(req.query.id)
    .then(category => {
        res.json({category})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.category_update_post = (req,res) => {
    console.log(req.body._id);

    Category.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then((category) => {
        res.json({category})
    })
    .catch((err) => {
        console.log(err);
    })
}

