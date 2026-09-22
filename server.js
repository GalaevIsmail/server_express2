const http = require('http')
const express = require('express');
const { log } = require('console');
const app = express()

const PORT = 3000;

app.get('/', (req, res)=>{
    res.send("Главная страница")
})

app.listen(PORT, ()=>{
    console.log(`Сервер успешно запушен по адресу: 127.0.0.1:${PORT}`)
})