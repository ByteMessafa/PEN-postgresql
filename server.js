var express = require('express'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    animeMembersRoute = require('./routes/routeAnimeMembers');



    app.set('views', __dirname + '/views');
    app.use('/public',express.static(path.join(__dirname,  'public')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false}));
    
    app.use('/myapi/v1',animeMembersRoute);


    app.listen(port, ()=>{
        console.log('===================================\n||  Server started on port 3000  ||\n===================================');
    });