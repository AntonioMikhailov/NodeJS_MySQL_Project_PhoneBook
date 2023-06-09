const{Router}=require('express')
const router =Router()
const pool = require('../main')
router.get("/search", (req, res) => {
  const abonent_query = req.query.abonent_query || ''; 
  // добавим условие - что если нет в поле данных то выведет всех т.к. пустая строка с учетом  "%${abonent_query}%"` будет совпадать со всеми вариантами поиска
  pool.query( `SELECT telephones.number, telephones.type, abonents.name FROM abonents  JOIN telephones ON telephones.abonent_id = abonents.id WHERE abonents.name LIKE "%${abonent_query}%"` // если поиск только по первой букве то -  "${abonent_query}%"
    ).then((data) => {
      res.render('search', {
        title: 'Поиск',
        data: data[0],
        abonent_query: abonent_query ,
        finded: data[0].length,
        isSearch: true
      })
 
    });
});
module.exports= router