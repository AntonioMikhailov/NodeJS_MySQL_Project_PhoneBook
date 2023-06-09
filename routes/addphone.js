const{Router}=require('express')
const router =Router()
const pool = require('../main')

router.post("/addphone/:abonent_id", async (req, res) => {
  const { abonent_id } = req.params;  
 const { number, type } = req.body;  
 
  await pool.query(
    `INSERT INTO telephones (abonent_id, type, number) VALUES (${abonent_id}, '${type}', "${number}")`
  );
 
 res.redirect(`/phones/${abonent_id}`);  
});
module.exports= router