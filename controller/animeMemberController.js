const pg = require('pg'),
        config = {
            user: 'eduonix',
            database: 'animeDB',
            password: 'postgres',
            port: 5432                  //Default port, change it if needed
        };
const pool = new pg.Pool(config);

exports.getAnimeMember = (req, res)=>{
    pool.connect((err, client, done)=>{
        if(err){
            console.log("Can not connect to the DB" + err);
        }
        client.query('SELECT * FROM public.anime_members', (err, result)=>{
            done();
            if(err){
                console.log(err);
                res.status(400).send(err);
            }
            res.status(200).send(result.rows);
        })
    });
},


exports.addAnimeMember = (req, res)=>{
    pool.connect((err, client, done) => {
        if (err) {
            console.log("Can not connect to the DB" + err);
        }
        client.query("INSERT INTO anime_members(parsonal_name, anime_name) VALUES($1, $2)",
            [req.body.parsonal_name, req.body.anime_name]);
        done();
        res.status(200).json({msg: 'Added!'});
    })
},


exports.updateAnimeMember = (req, res)=>{
    pool.connect((err, client, done) => {
        if (err) {
            console.log("Can not connect to the DB" + err);
        }
        client.query("UPDATE anime_members SET parsonal_name=$1, anime_name=$2 WHERE id=$3",
            [req.body.parsonal_name, req.body.anime_name, req.params.id]);
        done();
        res.status(200).json({msg: 'Updated!'});
    })
},


exports.deleteAnimeMember = (req, res)=>{
    pool.connect((err, client, done) => {
        if (err) {
            console.log("Can not connect to the DB" + err);
        }
        client.query("DELETE FROM anime_members WHERE id=$1",
            [req.params.id]);
        done();
        res.status(200).json({msg: 'Deleted!'});
    })
}