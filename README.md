# NodeJS_PostgreSQL_Project_RecipeBook
&nbsp;


![phone-book](https://github.com/AntonioMikhailov/AntonioMikhailov/blob/main/assets/abonents-book.png)


## Задача
 1.	Создать приложение Телефонная книга с возможностью просмотра, добавления, редактирования, удаления контактов.
2.	В разработке использовать среду NodeJS (Express), СУБД MySQL 
3.	Для формирования разметки использовать шаблонизатор HandleBars. 


&nbsp;
## Используемые языки, технологии, пакеты:
- NodeJS (Express), СУБД MySQL(MySQL WorkBench, PhpMyAdmin)), 
- express-fileupload, Sass


&nbsp;
## Реализация функционала и логики
 
- Для разработки приложения используем локальный сервер или удаленный сервер на хостинге Beget. 
- С помощью редактора WorkBench создадим две таблицы: abonents и telephones
- У каждого абонента может быть несколько телефонов, которые будут храниться в таблице telephones.  Для этого свяжем таблицы через ключ abonent_id 
- отдельные моменты работы описаны в комментариях файлов приложениях
 
&nbsp;
![phone-book-code](https://github.com/AntonioMikhailov/AntonioMikhailov/blob/main/assets/phoneBook-code.png)
