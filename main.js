// подлючаем экспресс
const express = require("express");
const mysql2 = require("mysql2/promise");  
const path=require('path') 
require('dotenv').config()
const app = express();  
app.use(express.urlencoded({ extended: true }));  
const exphbs=require('express-handlebars')
//   HandleBars - 
const hbs= exphbs.create({
  defaultLayout:'main', 
  extname:'hbs'
})  
app.engine('hbs', hbs.engine)
app.set('view engine','hbs')
 
// подключения к БД локального сервера 
//   const pool = mysql2.createPool({
//   host: "localhost",  
//  user: "root",
//  database: "phonebook",  
//  password: "12345678",  
// });
// ДЛЯ подключения к БД на хостинге Beget
  const pool = mysql2.createPool({
  host: process.env.HOST_BD, // Сервер для внешних подключений:
  user: process.env.USER_BD, // как и имя БД - Совпадает с именем БД   
  database: process.env.DATBASE_BD, // как в  PhpMyAdmin смотри мя БД
  password: process.env.PASSWORD_BD // пароль который задал на хостинге
});
module.exports= pool
 // Public  
 app.use(express.static('public'))
 // images   для фото
 app.use(express.static('images'))

const PORT = process.env.PORT || 3000;
//Главная
const home = require('./routes/index')
app.use(home)
// добавления юзера
const newuser = require('./routes/adduser')
app.use(newuser)
//Удаление юзера
const deleteuser = require('./routes/deleteuser')
app.use(deleteuser)

//список телефонов
const phones = require('./routes/phones')
app.use(phones)
 
//  добавление телефона  
const addPhone = require('./routes/addphone')
app.use(addPhone)

//Удаление телефона
const removePhone = require('./routes/removephone')
app.use(removePhone)

// Поиск по именам в БД
const search = require('./routes/search')
app.use(search)
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
});
