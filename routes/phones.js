const{Router}=require('express')
const router =Router()
const pool = require('../main')

router.get("/phones/:abonent_id", async (req, res) => {
  const { abonent_id } = req.params;  
  const [telephones] = await pool.query(
    `SELECT * FROM telephones WHERE abonent_id = ${abonent_id}`
  );
  // Дополнительно надо получить из таблицы abonents - ИМЯ т.к. когда еще нет телефонов то будет написано - default - Name
  const [[abonentName]] = await pool.query(`SELECT * FROM abonents  WHERE ${abonent_id} = id` )
 
   res.render('phones', {
    title: `Контакты-${abonentName.name}`,
    telephones:  telephones, 
    abonent_id: abonent_id,
    abonentName:  abonentName.name  
  })
 });
module.exports= router