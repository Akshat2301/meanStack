var express = require('express');
var router = express.Router();
var Article = require('../models/articleScheme');

router.post('/create',(req,res,next) => {
    var newArticle = new Article({
        title:req.body.title,
        description:req.body.description,
        markdown:req.body.markdown

    });
    newArticle.save((err,article)=>{
        if(err)
        res.status(500).json({errmsg :err});
        res.status(200).json({msg : article});
    });
});

router.get('/read',(req,res,next) => {
    Article.find({},(err,articles)=>{
        if(err)
        res.status(500).json({errmsg :err});
        res.status(200).json({msg : articles});

    });
});

router.put('/update',(req,res,next) => {
    Article.findById(req.body.id,(err,article)=>{
        if(err)
        res.status(500).json({errmsg :err});
        article.title=req.body.title;
        article.description=req.body.description;
        article.markdown=req.body.markdown;
        article.save((err,article) => {
        if(err)
            res.status(500).json({errmsg :err});
        res.status(200).json({msg : article});
        });
    })
});

router.delete('/delete/:id',(req,res,next) => {
    Article.findByIdAndDelete({_id:req.params.id},(err,article)=>{
            if(err)
                res.status(500).json({errmsg :err});
            res.status(200).json({msg : article});
        });      

});

module.exports=router;