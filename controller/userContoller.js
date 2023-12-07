const { log } = require("console")
const { response } = require('express');

module.exports={

    landingPage(req,res){
        res.render('user/landingPage');
    },

    homePage(req,res){

        res.render('user/homePage')
    }
}

