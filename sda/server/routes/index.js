var express = require('express');
var router = express.Router();
var mysql = require('promise-mysql');

pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  connectionLimit: 10
});



// check if user exsit
router.post('/register', async function (req, res, next) {  

  let registerQuery=`
  SELECT * FROM vacation.allusers 
  WHERE username='${req.body.username}'
  `;
  var result = await pool.query(registerQuery); 
  if(result.length==0)
  {
  

//  session...
req.session.user={
  username: req.body.username,
  pass:req.body.password
}



      // if no user found create one 
      let userQuery=
     ` INSERT INTO vacation.allusers ( username , password ,name,lastname)
      VALUES ( '${req.body.username}', '${req.body.password}','${req.body.name}','${req.body.lastname}'); 
      `;
      let data= await pool.query(userQuery) ;
      res.json(`welcome to are web ${req.session.user.username}`);

     
 

  }
  // user exsit
  else{
   
res.json(`username alredy exsit `); 

} 
});










// let user login
router.post('/login', async function (req, res, next) {  
  let loginQuery=`
  SELECT * FROM vacation.allusers 
  WHERE username='${req.body.username}' 
  `;
  var result1 = await pool.query(loginQuery); 
// chek at data base if we this username and password
  if(result1.length==1)
  { res.json(`welcome ${req.body.username}`)
   
  }
else{
  res.json(`worng username or password `); 
}



});










































































































































































/* CREATE DB */
router.get('/createdb', async (req, res, next) => {
  try {
      await pool.query('CREATE DATABASE vacation');
  } catch (err) {
      res.send(err)
  }
  res.send('ok');
});

/* CREATE TABLE */
router.get('/createtables', async (req, res, next) => {
  let q1=`CREATE TABLE vacation.users 
  (userid INT NOT NULL AUTO_INCREMENT , 
    username VARCHAR(30) NOT NULL ,
  pass VARCHAR(30) NOT NULL ,
  checkout VARCHAR(30) NOT NULL ,
  PRIMARY KEY (guestid))  `;
  
  try {
      await pool.query(q1);
  } catch (err) {
      res.send(err)
  }



  let q2=`CREATE TABLE hotels.rooms 
  ( roomid INT NOT NULL AUTO_INCREMENT , 
  price INT  NOT NULL ,
  guestid INT  NOT NULL , 
  PRIMARY KEY (roomid))  `;
  
  try {
      await pool.query(q2);
  } catch (err) {
      res.send(err)
  } 
  res.send('ok');
}); 
/* INSERT DUMMY DATA */
router.get('/insertdata', async (req, res, next) => {
  let q=`
  INSERT INTO hotels.rooms ( price , guestid)
  VALUES ( 900, 0 ); 
  `
  try {
      await pool.query(q);
  } catch (err) {
      res.send(err)
  }
  res.send('ok');
});





module.exports = router;
