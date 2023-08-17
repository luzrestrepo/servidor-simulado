const express = require ('express');
const app = express();

//libreria para consumo de api
const axios = require('axios');

const port = 8080;
app.use(express.json());

app.post('/crear',(req, res) =>{
    const data = {
        id:1,
        name:"recibe el valor del input",
        autor:"recibe el valor del id"
    }
    axios.post('http://localhost:3001/libros', data)
    .then((respuesta)=>{
        res.status(200).send(respuesta.data)
    })
    .catch((error) => {
        console.log('Error al hacer la petición POST', error.message);
        res.status(500).send('Error al hacer la petición POST');
    });
})

app.get('/listar', async(req,res)=>{
    const rta = await axios.get('http://localhost:3001/libros')
    res.status(200).send(rta.data)
})

app.listen(port,()=>{
    console.log('hola soy un cliente')
})

