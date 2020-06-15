const { Router } = require('express');
const router= Router();
const _ =require('underscore');
const cors=require('cors');

const alumnos=require('../base.json');

router.get('/',cors(), (req,res)=>{
    res.json(alumnos);
    console.log(alumnos);
});

router.post('/',cors(), (req,res)=>{
    const {Nombre, Grado, Grupo, Promedio}=req.body;
    if(Nombre && Grado && Grupo && Promedio){
        const id=alumnos.length + 1;
        const newAlumnos = {...req.body,id};
        alumnos.push(newAlumnos);
        res.json(alumnos);
    }else{
        res.status(500).json({error: 'Hubo un error'});
    }
});


router.put('/:id',cors(), (req,res)=>{
    const id = req.params.id;
    const {Nombre, Grado, Grupo, Promedio}=req.body;
    _.each(alumnos, (alumno,i)=>{
        if(alumno.id==id){
           alumno.Nombre=Nombre;
           alumno.Grado=Grado;
           alumno.Grupo=Grupo;
           alumno.Promedio=Promedio;
        }
    });
    res.json(alumnos);

});


router.delete('/:id',cors(), (req,res)=>{
    const { id }= req.params;
    let pos=-1;
    _.each(alumnos, (alumno,i)=>{
        if(alumno.id==id){
            pos=i;
        }
        /*else{res.status(500).json({error:'Hubo un error'});}*/
    });
    if(pos!=-1)
    alumnos.splice(pos,1);
    res.json(alumnos);
});

module.exports= router;