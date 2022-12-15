const express=require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const port = 3000

const staticpath = path.join(__dirname,"../public")
const viewspath = path.join(__dirname,'../templates/views')
const partialsspath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsspath)
app.set('view engine', 'hbs')
app.set('views',viewspath)

app.use(express.static(staticpath))

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})

app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`)
})
