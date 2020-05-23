const { Router } = require('express');
const router = Router();
const _= require('lodash');

const book1 = require('../books.json');

router.get('/book', (req, res) => {
    res.json(book1);
});


//Metodo para crear json en memoria
router.post('/book', (req, res) => {
    const {id, name, author} = req.body;
    if (id && name && author){
        const newMovie = {...req.body};
        book1.push(newMovie);
        res.json({'added': 'ok'});

    } else {
        res.status(400).json({'statusCode': 'Bad Request'});
    }
  
}); 



//Metodo para eliminar json en memoria segun id
router.delete('/book/:id', (req, res) => {
     const id = req.params.id;
     _.remove(book1, (autho) =>{
         return autho.id == id;
     })
     res.json(book1);
    });

//Metodo para modificar json a traves del ip
router.put('/book/:id', (req, res) => {
    const id = req.params.id;
    const {name,author} = req.body;
    _.each(book1, (bo) =>{
        if (bo.id == id){
                bo.name = name;
                bo.author = author;       
        }
    })
    res.json({'modified':'ok'});
    });
  

module.exports = router;