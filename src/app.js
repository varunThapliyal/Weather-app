const express=require('express')
const app=express()
const path=require('path')
const hbs=require('hbs')
const geocode=require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')
const port=process.env.PORT ||3000

const pathDirectory=path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'../template/views')
const partialPath=path.join(__dirname,'../template/partials/header')
const partialPath2=path.join(__dirname,'../template/partials/footer')

app.use(express.static(pathDirectory))

app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialPath)
hbs.registerPartials(partialPath2)


app.get('',(req,res) =>{
    res.render('index',{
        name:'Varun Thapliyal',
        title:'Weather'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        name:'Varun Thapliyal',
        title:'about'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        name:'Varun Thapliyal',
        title:'help'
    })
})

app.get('/Weather',(req,res)=>{
    if(!req.query.address){
       return res.send({
            error:'You should provide address'
        })
    }
    
        geocode(req.query.address,(err,{longitude,latitude,location}={}) =>{
                if(err){
                   return res.send(error)
                }
            forecast(longitude,latitude,(err,{temp,rainchance}) =>{
                if(err){
                    return res.send(err)
                 }
                 res.send({
                     temp:temp,
                     rainchance:rainchance,
                     address:req.query.address,
                     location
                 })
            })
        })
    
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        name:'Varun Thapliyal',
        title:'404',
        errorMessage:'Help not found'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        name:'Varun Thapliyal',
        title:'404',
        errorMessage:'Page not found'
    })
})




    app.listen(port,()=>{
   console.log("Server on at"+port)
    } )