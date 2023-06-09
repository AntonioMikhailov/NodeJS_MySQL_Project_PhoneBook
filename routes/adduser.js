const{Router}=require('express')
const router =Router()
const pool = require('../main')
 
const multer  = require('multer')
const upload = multer({ dest: 'images/' })  
 
router.post("/adduser", upload.single('file'),  async (req, res) => {
 const { username } = req.body; // деструктуриз.
      // Проверка на добавление фото - иначе все падает
      if(req.file) {  
        let photo = req.file.filename;  
           await pool.query( `INSERT INTO abonents (name, photo) VALUES ("${username}", '${photo}' )`
           );
         } else { // если фото не вставляем - то фото по дефолту ставим
           await pool.query(`INSERT INTO abonents (name) VALUES ("${username}")`  );
         }
     res.redirect(`/`);  // редирект на Главную с обновленными данными
  });
  
module.exports= router