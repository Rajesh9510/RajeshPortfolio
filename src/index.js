//npm run dev

const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const exp = require('constants');
const port = process.env.PORT || 2002;
require('./database/config')
const contactuserdata=require('./model/model')
const filepath = path.join(__dirname, '../views')
const partials_path = path.join(__dirname, '../views/partials')
hbs.registerPartials(partials_path)
app.set('view engine', 'hbs')
app.set('views', filepath)
app.use('/public', express.static(path.join(__dirname, "../public")))
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));



app.get('/', (req, res) => {
    res.render("home")
})
app.post('/contactdata',async(req,res)=>{
    try
    {
        username=req.body.user;
        email=req.body.email;
        message=req.body.msg;
        const contactsave = new contactuserdata({
            name:username,
            email:email,
            message:message
        })
        const savedata=await contactsave.save();
        if(savedata)
        {
           res.render('home'); 
        }
    }
    catch(error)
    {
        res.status(401).send(error)
    }
})


app.listen(port, () => {
    console.log(`listing at port ${port}`)
})