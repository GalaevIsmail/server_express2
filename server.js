
const express = require('express');//подключили библиотеку Express
const { log } = require('console');
const app = express()// запустили Express


app.use(express.json())

const PORT = 3000;//Обозначили порт для дальнейшего запуска

app.get('/', (req, res)=>{/// создаем git запрос для получения главной сьраницы
    res.send("Главная страница")//  отправилям клиенту ответ respons
})

app.get('/about', (req, res)=>{/// создаем git запрос для получения главной сьраницы
    res.send("О нас ")//  отправилям клиенту ответ respons
})

app.get('/contact', (req, res)=>{/// создаем git запрос для получения главной сьраницы
    res.send(" Наш номер 899380058997")//  отправилям клиенту ответ respons
})

app.get('/fon/:number' , (req, res)=>{
    console.log(req.params)
    res.send(`ваш номер телевона :${req.params.number}`)
})

app.get('/product/:id',(req, res)=>{
    res.send(`Товар с id: ${req.params.id}`)
});

app.post('/product/add', (req, res)=>{
    const {id, title, price} = req.body
  res.send(`Товар добавлен успешно 
    Название:${title} 
    цена:${price}`);
    
    
})
app.post('/regitre/regiteres' , (req , res)=>{
    const {name,lasname,numberhone } = req.body
    res.send(`Регистрация прошла успешна
        Имя:${name} 
        Фамилия :${lasname} 
        Номер телефона:${numberhone}`)
})

app.listen(PORT, ()=>{//настраиваем сервер на чем он будет запущен
    console.log(`Сервер успешно запушен по адресу: 127.0.0.1:${PORT}`)
})

