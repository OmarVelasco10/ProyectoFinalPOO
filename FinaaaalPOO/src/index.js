const express=require("express");
const bodyparser=require("body-parser");
const morgan=require("morgan");

const app=express();

app.set('port', 3000);
app.set('json spaces',2);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use(require('./routes/index'));
app.use('/api/alumnos',require('./routes/alumnos'));

app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});