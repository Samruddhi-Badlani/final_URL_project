var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var dust = require('dustjs-helpers');
var pg = require('pg');
var request = require('request');
const { link } = require('fs');
require('dotenv').config();
var pool;
var client;
app = express();
let my_user= process.env.USER;
let my_host = process.env.HOST;
let my_port_db = process.env.PORT;
let my_password= process.env.PASSWORD;
let my_databse= process.env.DATABASE;
//DB connection
var connect = "postgres://user1:abc1234@localhost/my_database";

//Assign dust engines 
app.engine('dust', cons.dust);

app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
//Server 
my_initial_list = null;
app.get('/', function (req, res) {
  
  client.query('SELECT * FROM url_status', (err, result) => {
    res.render('index', { urls: result.rows });
   
  })

});

app.post('/example', (req, res) => {
  
  client.query("INSERT INTO url_status(url_name,status) VALUES('" + req.body.add_url + "','closing')", (err, result) => {
    if (err) {
      console.log("Error");
      console.log(err)
    }
  });
  var check=0;
  request.get(req.body.add_url,function(error,response,body){
    if (error || response === null) {
      console.log("Closing");
      client.query("UPDATE url_status SET status='closing' WHERE url_name=$1",[req.body.add_url], (err, temp) => {
        if (err)
          console.log(err);
      });
    }
    else if (response.statusCode == 200) {
      console.log("running");
      client.query("UPDATE url_status SET status='running' WHERE url_name=$1",[req.body.add_url], (err, temp) => {
        if (err)
          console.log(err);
      });
    }
    else {
      console.log("Closing else ")
      client.query("UPDATE url_status SET status='closing' WHERE url_name=$1", [req.body.add_url], (err, temp) => {

      });
    }
    client.query("SELECT * FROM url_status", (err, result) => {
      if (err) {
        console.log("Error");
        console.log(err)
      }
      res.render('index', { urls: result.rows });
      console.log(req.body);
      
    });
  })
  
 

})
app.post('/del', (req, res) => {

  client.query("DELETE  FROM url_status WHERE id = " + req.body.url_delete + "", (err, result) => {
    if (err) {
      console.log("Error");
      console.log(err)
    }
  });
  client.query("SELECT * FROM url_status", (err, result) => {
    if (err) {
      console.log("Error");
      console.log(err)
    }
    res.render('index', { urls: result.rows });
    console.log(req.body);
  
  });
})

app.get('/status', (req, res) => {

  
  //  client.query("SELECT url_name FROM url_status WHERE id = 2").then((result)=>{
  //    console.log(result.rows[0]['url_name']);
  //    client.query("SELECT id FROM url_status WHERE url_name= $1",[result.rows[0]['url_name']],(error,res)=>{

  //      console.log(res.rows[0]['id'])
  //      client.end();
  //    })
  //  })
  client.query("SELECT * FROM url_status").then((res1) => {
    

    for (let x = 0; x < res1.rows.length; x++) {
      // console.log(res1.rows[x]['url_name']);
      // console.log(x + "bool");
      var link=""+res1.rows[x]['url_name'];
      // console.log("https://www.google.com"+"  "+link);
      // console.log("https://www.google.com" == link)
      var status_string = ""+res1.rows[x]['status'];
     
      
      
      request.get(link, function (error, response, body) {
        
        if (error || response === null) {
          console.log("Closing");
          client.query("UPDATE url_status SET status='closing' WHERE url_name=$1", [res1.rows[x]['url_name']], (err, temp) => {
            if (err)
              console.log(err);
          });
        }
        else if (response.statusCode == 200) {
          console.log("running");
          client.query("UPDATE url_status SET status='running' WHERE url_name=$1", [res1.rows[x]['url_name']], (err, temp) => {
            if (err)
              console.log(err);
          });
        }
        else {
          console.log("Closing else ")
          client.query("UPDATE url_status SET status='closing' WHERE url_name=$1", [res1.rows[x]['url_name']], (err, temp) => {

          });
        }
        if(x+1==res1.rows.length){
          client.query("SELECT * FROM url_status", (err, result) => {
            if (err) {
              console.log("Error");
              console.log(err)
            }
            res.render('index', { urls: result.rows });
            console.log(result.rows);
          
          });
        }
      })
    
      
      



    }
    


  })
 



})

app.post('/edit',(req,res)=>{
  
  console.log(req.body.edited_url_id);
  const values = [req.body.edited_url,req.body.edited_url_id]
  console.log(req.body.edited_url);
  client.query("UPDATE url_status SET url_name=$1,status='closing' WHERE id=$2",values,(err,result1)=>{
    console.log("hello");
    if(err){
      console.log(err);
    }
    })
  request.get(req.body.edited_url,function(error,response,body){
    if (error || response === null) {
      console.log("Closing");
      client.query("UPDATE url_status SET status='closing' WHERE url_name=$1",[req.body.edited_url], (err, temp) => {
        if (err)
          console.log(err);
      });
    }
    else if (response.statusCode == 200) {
      console.log("running");
      client.query("UPDATE url_status SET status='running' WHERE url_name=$1",[req.body.edited_url], (err, temp) => {
        if (err)
          console.log(err);
      });
    }
    else {
      console.log("Closing else ")
      client.query("UPDATE url_status SET status='closing' WHERE url_name=$1", [req.body.edited_url], (err, temp) => {

      });
    }
    client.query("SELECT * FROM url_status", (err, result) => {
      if (err) {
        console.log("Error");
        console.log(err)
      }
      res.render('index', { urls: result.rows });
      console.log(req.body);
      
    });
  })
})

app.listen(3000, () => {
  const { Pool, Client } = require('pg')
   pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database:process.env.DATABASE,
    password:process.env.PASSWORD,
    port:process.env.PORT,
  })
   client = new Client({
    user:  my_user,
    host:my_host,
    database:my_databse,
    password:my_password,
    port:my_port_db
  })
  client.connect();
  console.log("Server started");
  console.log(process.env.HOST);
  console.log(process.env.USER);
  console.log(process.env.PORT);
  console.log(process.env.PASSWORD);
  console.log(process.env.DATABASE);
})

