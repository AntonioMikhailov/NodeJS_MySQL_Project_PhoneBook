const{Router}=require('express')
const router =Router()
const pool = require('../main')

router.get("/", async (req, res) => {
 const [abonents] = await pool.query("SELECT * FROM abonents");  
res.render('index', {
  title: 'Главная-телефоны',
  abonents: abonents,  
  isHome: true
 }) 
 });
module.exports= router