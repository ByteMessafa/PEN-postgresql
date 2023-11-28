const express = require('express'),
    router = express.Router(),
    anime = require('../controller/animeMemberController');



    router.get('/', anime.getAnimeMember);

    router.post('/add', anime.addAnimeMember);

    router.put('/update/:id', anime.updateAnimeMember); 

    router.delete('/delete/:id', anime.deleteAnimeMember);

module.exports = router;