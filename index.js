const express = require('express')
const template =require('art-template')




var app = express()

//是否开启缓存，默认是true
template.config('cache',false)
app.engine('.html', template.__express);
app.set('view engine', 'html');
app.get('/',(req,res)=>{
    //  可以加路径index
    var html =template('mode',{
        'title':"服务器段模板",
        "books" : [{
            name : "重构你的设计方法"
        },{
            name : "大话设计模式"
        }]
    })

    res.end(html)
})

app.get('/engine',(req,res)=>{
    var data = {
        'title':"服务器段模板",
        "books" : [{
            name : "重构你的设计方法"
        },{
            name : "大话设计模式"
        }]
    }
    res.render('page',data)
})

app.listen(3000,function(){
    console.log('127.0.0.1:3000')
})