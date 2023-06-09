const{Router}=require('express')
const router =Router()
const pool = require('../main')

router.get("/removephone/:telephone_id", async (req, res) => {
  const { telephone_id } = req.params;  
   // Чтобы сделать редирект после удаления на страницу этого же юзера надо получить его данные из другой таблицы  
  const [[currentUser]] = await pool.query(
    `SELECT * FROM telephones WHERE id = "${telephone_id}";`
  );
  //Удаляем
  await pool.query(`DELETE FROM telephones WHERE id = "${telephone_id}";`);
 res.redirect(`/phones/${currentUser.abonent_id}`); // просто делаем редирект на страницу текущего юзера по abonent_id
});
module.exports= router