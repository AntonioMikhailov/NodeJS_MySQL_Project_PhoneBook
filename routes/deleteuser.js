const{Router}=require('express')
const router =Router()
const pool = require('../main')

router.get("/deleteuser/:id", async (req, res) => {
const { id } = req.params;  
 await pool.query(
    `DELETE FROM abonents WHERE id ="${id}"`
  );

 res.redirect(`/`);  // редирект на Главную с обновленными данными
});
module.exports= router