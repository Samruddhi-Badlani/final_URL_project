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
let my_user = process.env.USER;
let my_host = process.env.HOST;
let my_port_db = process.env.PORT;
let my_password = process.env.PASSWORD;
let my_databse = process.env.DATABASE;
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
    var progress_bar = null;
    var result_table = "false";
    client.query('SELECT * FROM url_runs', (err, runs_response) => {
      // console.log(result.rows);
      var my_success_data = [];
      for (let i = 0; i < result.rows.length; i++) {

        my_success_data.push(result.rows[i]['success']);
      }
      client.query("SELECT column_name FROM information_schema.columns WHERE table_name='url_runs'").then((col_names) => {
        var my_run_1_info = [];
        // console.log(col_names.rows.length);
        var my_row_counter = 0;
        for ( my_row_counter = 0; my_row_counter < runs_response.rows.length; my_row_counter++) {
          for (let my_col_counter = 1; my_col_counter < col_names.rows.length; my_col_counter++) {

            if (my_col_counter == 1) {
              // console.log(runs_response.rows[my_row_counter][col_names.rows[my_col_counter]['column_name']]);
              if (runs_response.rows[my_row_counter][col_names.rows[my_col_counter]['column_name']] == "running") {
                // console.log(result.rows[my_row_counter]['name']);
                client.query("UPDATE  lastruns SET a = 20 WHERE my_name = $1",[result.rows[my_row_counter]['name']], (err,my_final_result_hello) => {
                  if (err) {
                    console.log("error in copying column  " + err);
                  }
                  // console.log("query is executing  ")
                })
              }
              else{
                // console.log(result.rows[my_row_counter]['name']);
                client.query("UPDATE  lastruns SET a = 10 WHERE my_name = $1",[result.rows[my_row_counter]['name']], (err,my_final_result_hello) => {
                  if (err) {
                    console.log("error in copying column  " + err);
                  }
                  // console.log("query is executing  ")
                })
              }
            }
            if (my_col_counter == 2) {
              // console.log(runs_response.rows[my_row_counter][col_names.rows[my_col_counter]['column_name']]);
              if (runs_response.rows[my_row_counter][col_names.rows[my_col_counter]['column_name']] == "running") {
                console.log(result.rows[my_row_counter]['name']);
                client.query("UPDATE  lastruns SET b = 20 WHERE my_name = $1",[result.rows[my_row_counter]['name']], (err,my_final_result_hello) => {
                  if (err) {
                    console.log("error in copying column  " + err);
                  }
                  // console.log("query is executing  ")
                })
              }
              else{
                // console.log(result.rows[my_row_counter]['name']);
                client.query("UPDATE  lastruns SET b = 10 WHERE my_name = $1",[result.rows[my_row_counter]['name']], (err,my_final_result_hello) => {
                  if (err) {
                    console.log("error in copying column  " + err);
                  }
                  // console.log("query is executing  ")
                })
              }
            }
            if (my_col_counter == 3) {
              // console.log(runs_response.rows[my_row_counter][col_names.rows[my_col_counter]['column_name']]);
              if (runs_response.rows[my_row_counter][col_names.rows[my_col_counter]['column_name']] == "running") {
                // console.log(result.rows[my_row_counter]['name']);
                client.query("UPDATE  lastruns SET c = 20 WHERE my_name = $1",[result.rows[my_row_counter]['name']], (err,my_final_result_hello) => {
                  if (err) {
                    console.log("error in copying column  " + err);
                  }
                  // console.log("query is executing  ")
                })
              }
              else{
                // console.log(result.rows[my_row_counter]['name']);
                client.query("UPDATE  lastruns SET c = 10 WHERE my_name = $1",[result.rows[my_row_counter]['name']], (err,my_final_result_hello) => {
                  if (err) {
                    console.log("error in copying column  " + err);
                  }
                  // console.log("query is executing  ")
                })
              }
            }
            if (my_col_counter == 4) {
              // console.log(runs_response.rows[my_row_counter][col_names.rows[my_col_counter]['column_name']]);
              if (runs_response.rows[my_row_counter][col_names.rows[my_col_counter]['column_name']] == "running") {
                // console.log(result.rows[my_row_counter]['name']);
                client.query("UPDATE  lastruns SET d = 20 WHERE my_name = $1",[result.rows[my_row_counter]['name']], (err,my_final_result_hello) => {
                  if (err) {
                    console.log("error in copying column  " + err);
                  }
                  // console.log("query is executing  ")
                })
              }
              else{
                // console.log(result.rows[my_row_counter]['name']);
                client.query("UPDATE  lastruns SET d = 10 WHERE my_name = $1",[result.rows[my_row_counter]['name']], (err,my_final_result_hello) => {
                  if (err) {
                    console.log("error in copying column  " + err);
                  }
                  // console.log("query is executing  ")
                })
              }
            }
            if (my_col_counter == 5) {
              // console.log(runs_response.rows[my_row_counter][col_names.rows[my_col_counter]['column_name']]);
              if (runs_response.rows[my_row_counter][col_names.rows[my_col_counter]['column_name']] == "running") {
                // console.log(result.rows[my_row_counter]['name']);
                client.query("UPDATE  lastruns SET e = 20 WHERE my_name = $1",[result.rows[my_row_counter]['name']], (err,my_final_result_hello) => {
                  if (err) {
                    console.log("error in copying column  " + err);
                  }
                  // console.log("query is executing  ")
                })
              }
              else{
                console.log(result.rows[my_row_counter]['name']);
                client.query("UPDATE  lastruns SET e = 10   WHERE my_name = $1",[result.rows[my_row_counter]['name']], (err,my_final_result_hello) => {
                  if (err) {
                    console.log("error in copying column  " + err);
                  }
                  // console.log("query is executing  ")
                })
              }
            }

          }
        }
        if(my_row_counter == result.rows.length){
        client.query("SELECT * FROM lastruns",(err,lastRunsData)=>{
       
          res.render('index', { urls: result.rows, pg_vis: progress_bar, runs: runs_response.rows, result_vis: result_table, success: my_success_data, last:lastRunsData.rows });
        })
      
        // console.log(col_names.rows[my_col_counter]['column_name']);
        }

      })

    })



  })

});

app.post('/example', (req, res) => {
  var my_arguments = [req.body.add_url, req.body.add_url_name]

  client.query("INSERT INTO url_status(url_name,status,name) VALUES($1,'closing',$2)", my_arguments, (err, result) => {
    if (err) {
      console.log("Error");
      console.log(err)
    }
  });
  client.query("INSERT INTO url_runs(name) VALUES($1)", [req.body.add_url], (err, result) => {
    if (err) {
      console.log("Error");
      console.log(err)
    }
  });

  var check = 0;
  request.get(req.body.add_url, function (error, response, body) {
    if (error || response === null) {
      console.log("Closing");
      client.query("UPDATE url_status SET status='closing',CopyrightStatus='closing' WHERE url_name=$1", [req.body.add_url], (err, temp) => {
        if (err)
          console.log(err);
      });
    }
    else if (response.statusCode == 200) {
      console.log("running");
      let my_html_response = JSON.stringify(response);
      let containsCopyright = my_html_response.includes("Copyright") || my_html_response.includes("copyright");
      if (containsCopyright) {
        client.query("UPDATE url_status SET status='running',CopyrightStatus='running' WHERE url_name=$1", [req.body.add_url], (err, temp) => {
          if (err)
            console.log(err);
        });
      }
      else {
        console.log("Copyright not found in the url " + [req.body.add_url]);
        client.query("UPDATE url_status SET status='running',CopyrightStatus='closing' WHERE url_name=$1", [req.body.add_url], (err, temp) => {

        });
      }
    }
    else {
      console.log("Closing else ")
      client.query("UPDATE url_status SET status='closing',CopyrightStatus='closing' WHERE url_name=$1", [req.body.add_url], (err, temp) => {

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

  client.query("DELETE  FROM url_status WHERE id = $1", [req.body.url_delete], (err, result) => {
    if (err) {
      console.log("Error");
      console.log(err)
    }
  });
  client.query("DELETE  FROM url_runs WHERE name = $1", [req.body.url_delete_name], (err, result) => {
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





  var my_date_now = new Date();
  var my_new_column_name = my_date_now.toString().slice(0, 24);
  my_new_column_name = my_new_column_name.split(" ").join("_").slice(0, 24).split(":").join("_")

  console.log(my_new_column_name)
  let num_of_url_runs = 0;
  client.query("SELECT COUNT(*) FROM information_schema.columns WHERE table_name='url_runs'").then((my_res) => {
    num_of_url_runs = my_res.rows[0]['count'] - 1;
    console.log(num_of_url_runs);
    if (num_of_url_runs >= 5) {
      console.log("YES MORE THAN 5")
      client.query("SELECT column_name FROM information_schema.columns WHERE table_name='url_runs'").then((my_col) => {
        console.log(my_col.rows)

        let the_col_delete = my_col.rows[1]['column_name'];
        console.log(the_col_delete + " is to be deleted ");
        client.query("ALTER TABLE url_runs DROP COLUMN " + the_col_delete).then(() => {
          console.log(the_col_delete + " is deleted from database table");
        });
      })
    }
  });


  // client.query("SELECT * FROM url_runs").then((my_whole_run_table)=>{
  //   console.log(my_whole_run_table)

  // })
  client.query("ALTER  TABLE  url_runs ADD COLUMN " + my_new_column_name + " VARCHAR").then(() => {



    console.log(my_new_column_name + "added into url_runs ");

  })
  client.query("SELECT * FROM url_status").then((res1) => {


    for (let x = 0; x < res1.rows.length; x++) {

      var link = "" + res1.rows[x]['url_name'];
      var status_string = "" + res1.rows[x]['status'];
      var values = [my_new_column_name, res1.rows[x]['url_name']];

      // Updating total runs for a website
      client.query("SELECT runs FROM url_status WHERE url_name =$1", [res1.rows[x]['url_name']], (err, ans) => {
        console.log("previous runs = " + ans.rows[0]['runs']);
        var my_current_runs = ans.rows[0]['runs'] + 1;
        var my_runs_params = [my_current_runs, res1.rows[x]['url_name']]
        client.query("UPDATE url_status SET runs=$1 WHERE url_name=$2", my_runs_params, (err, ans2) => {
          if (err)
            console.log(err)
          else
            console.log("runs updated");
        })

      });

      // Checking the status of a website 
      request.get(link, function (error, response, body) {


        if (error || response === null) {
          console.log("Closing  (Internet Error possibly)");
          client.query("UPDATE url_status SET status='closing',CopyrightStatus='closing' WHERE url_name=$1", [res1.rows[x]['url_name']], (err, temp) => {
            if (err)
              console.log(err);
            else {
              client.query("SELECT failure FROM url_status WHERE url_name =$1", [res1.rows[x]['url_name']], (err, ans) => {
                console.log("previous fails = " + ans.rows[0]['failure']);
                var my_current_fails = ans.rows[0]['failure'] + 1;
                var my_failure_params = [my_current_fails, res1.rows[x]['url_name']]
                client.query("UPDATE url_status SET failure=$1 WHERE url_name=$2", my_failure_params, (err, ans2) => {
                  if (err)
                    console.log(err)
                  else
                    console.log("failure updated");
                })

              });
            }


          });
          client.query("UPDATE url_runs SET " + my_new_column_name + "='closing' WHERE name=$1", [res1.rows[x]['url_name']], (err, temp) => {
            if (err)
              console.log(err);
          });
        }
        else if (response.statusCode == 200) {
          console.log("running");
          let my_html_response = JSON.stringify(response);
          let containsCopyright = my_html_response.includes("Copyright") || my_html_response.includes("copyright");
          if (containsCopyright) {

            client.query("SELECT success FROM url_status WHERE url_name =$1", [res1.rows[x]['url_name']], (err, ans) => {
              console.log("previous success = " + ans.rows[0]['success']);
              var my_current_success = ans.rows[0]['success'] + 1;
              var my_success_params = [my_current_success, res1.rows[x]['url_name']]
              client.query("UPDATE url_status SET success=$1 WHERE url_name=$2", my_success_params, (err, ans2) => {
                if (err)
                  console.log(err)
                else
                  console.log("success updated");
              })

            });

            client.query("UPDATE url_status SET status='running',CopyrightStatus='running' WHERE url_name=$1", [res1.rows[x]['url_name']], (err, temp) => {
              if (err)
                console.log(err);

            });
            client.query("UPDATE url_runs SET " + my_new_column_name + "='running' WHERE name=$1", [res1.rows[x]['url_name']], (err, temp) => {
              if (err)
                console.log(err);
            });
          }
          else {
            console.log("Copyright not found in the url " + [res1.rows[x]['url_name']]);

            client.query("SELECT failure FROM url_status WHERE url_name =$1", [res1.rows[x]['url_name']], (err, ans) => {
              console.log("previous fails = " + ans.rows[0]['failure']);
              var my_current_fails = ans.rows[0]['failure'] + 1;
              var my_failure_params = [my_current_fails, res1.rows[x]['url_name']]
              client.query("UPDATE url_status SET failure=$1 WHERE url_name=$2", my_failure_params, (err, ans2) => {
                if (err)
                  console.log(err)
                else
                  console.log("failure updated");
              })

            });

            client.query("UPDATE url_status SET status='running',CopyrightStatus='closing' WHERE url_name=$1", [res1.rows[x]['url_name']], (err, temp) => {

            });
            client.query("UPDATE url_runs SET " + my_new_column_name + "='closing' WHERE name=$1", [res1.rows[x]['url_name']], (err, temp) => {
              if (err)
                console.log(err);
            });
          }
        }
        else {
          console.log("Closing else ");


          client.query("SELECT failure FROM url_status WHERE url_name =$1", [res1.rows[x]['url_name']], (err, ans) => {
            console.log("previous fails = " + ans.rows[0]['failure']);
            var my_current_fails = ans.rows[0]['failure'] + 1;
            var my_failure_params = [my_current_fails, res1.rows[x]['url_name']]
            client.query("UPDATE url_status SET failure=$1 WHERE url_name=$2", my_failure_params, (err, ans2) => {
              if (err)
                console.log(err)
              else
                console.log("failure updated");
            })

          });
          client.query("UPDATE url_status SET status='closing',CopyrightStatus='closing' WHERE url_name=$1", [res1.rows[x]['url_name']], (err, temp) => {

          });
          client.query("UPDATE url_runs SET " + my_new_column_name + "='closing' WHERE name=$1", [res1.rows[x]['url_name']], (err, temp) => {
            if (err)
              console.log(err);
          });
        }
        if (x + 1 == res1.rows.length) {
          client.query("SELECT * FROM url_status", (err, result) => {
            if (err) {
              console.log("Error");
              console.log(err)
            }
            var result_table = "true";
            client.query("SELECT * FROM lastruns",(err,lastRunsData)=>{
       
              res.render('index', {urls: result.rows, pg_vis: "true", result_vis: result_table,last:lastRunsData.rows });
            })
          
            
            console.log(result.rows);

          });
        }
      })






    }



  })




})

app.post('/edit', (req, res) => {

  console.log(req.body.edited_url_id + " this is the new name ");

  const values = [req.body.edited_url, req.body.edited_url_name, req.body.edited_url_id];
  console.log(req.body.edited_url);

  client.query("SELECT url_name FROM url_status WHERE id=$1", [req.body.edited_url_id]).then((my_name) => {
    console.log(my_name.rows[0]['url_name'] + "is to be modified ");
    var my_search_name = my_name.rows[0]['url_name'];
    var my_values = [req.body.edited_url, my_search_name]
    client.query("UPDATE url_runs SET name=$1 WHERE name = $2", my_values, (err, my_final_res) => {
      if (err) {
        console.log("edit function not working in runs");
      }
    });
    client.query("UPDATE url_status SET url_name=$1,status='closing',name=$2 WHERE id=$3", values, (err, result1) => {
      console.log("hello");
      if (err) {
        console.log(err);
      }
    })

  })

  request.get(req.body.edited_url, function (error, response, body) {
    if (error || response === null) {
      console.log("Closing");
      client.query("UPDATE url_status SET status='closing',CopyrightStatus='closing' WHERE url_name=$1", [req.body.edited_url], (err, temp) => {
        if (err)
          console.log(err);
      });
    }
    else if (response.statusCode == 200) {
      console.log("running");
      let my_html_response = JSON.stringify(response);
      let containsCopyright = my_html_response.includes("Copyright") || my_html_response.includes("copyright");
      if (containsCopyright) {
        client.query("UPDATE url_status SET status='running',CopyrightStatus='running' WHERE url_name=$1", [req.body.edited_url], (err, temp) => {
          if (err)
            console.log(err);

        });
      }
      else {
        console.log("Closing else ")
        client.query("UPDATE url_status SET status='running',CopyrightStatus='closing' WHERE url_name=$1", [req.body.edited_url], (err, temp) => {

        });
      }
    }
    else {
      console.log("Closing else ")
      client.query("UPDATE url_status SET status='closing',CopyrightStatus='closing' WHERE url_name=$1", [req.body.edited_url], (err, temp) => {

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
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
  })
  client = new Client({
    user: my_user,
    host: my_host,
    database: my_databse,
    password: my_password,
    port: my_port_db
  })

  client.connect();
  console.log("Server started");
  console.log(process.env.HOST);
  console.log(process.env.USER);
  console.log(process.env.PORT);
  console.log(process.env.PASSWORD);
  console.log(process.env.DATABASE);
})

