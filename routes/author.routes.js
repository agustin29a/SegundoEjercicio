const { Router } = require('express');
const router = Router();
const _= require('lodash');

const author1 = require('../authors.json');

router.get('/author', (req, res) => {
    res.json(author1);
});


//Metodo para crear json en memoria
router.post('/author', (req, res) => {
    const {id, name, lastname} = req.body;
    if (id && name && lastname){
        const newMovie = {...req.body};
        author1.push(newMovie);
        res.json({'added': 'ok'});

    } else {
        res.status(400).json({'statusCode': 'Bad Request'});
    }
  
}); 



//Metodo para eliminar json en memoria segun id
router.delete('/author/:id', (req, res) => {
     const id = req.params.id;
     _.remove(author1, (autho) =>{
         return autho.id == id;
     })
     res.json(author1);
    });

//Metodo para modificar json a traves del ip
router.put('/author/:id', (req, res) => {
    const id = req.params.id;
    const {name,lastname} = req.body;
    _.each(author1, (autho) =>{
        if (autho.id == id){
                autho.name = name;
                autho.lastname = lastname;       
        }
    })
    res.json({'modified':'ok'});
    });
  



module.exports = router;