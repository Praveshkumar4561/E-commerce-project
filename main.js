const express=require("express")
const mysql=require('mysql')
const cors=require('cors')
const multer=require('multer')
const path=require('path')
const app=express()
const bodyParser=require('body-parser')

const storage=multer.diskStorage({
  destination:'./uploads/',
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
  }
})
const upload=multer({
  storage:storage
}).single('image')

app.use(express.json())
app.use(cors())

const db=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"pravesh@123",
  database:"navbar"
})
db.connect((err)=>{
  if(err){
    throw err;
  }
  else{
    console.log('database connected')
  }
})
app.set("view engine","ejs")
app.use(express.static('public'))
app.use(express.static('uploads'))
app.use(bodyParser.urlencoded({extended:true}));


// app.get('/',(req,res)=>{
//   res.render('index')
// })
// app.get('/add_items',(req,res)=>{
//   res.render("add items")
// })


app.post('/add_items',(req,res)=>{
  upload(req,res,err=>{
    if(err)throw err;
    else{
      const {filename}=req.file
      console.log(filename)
      const {product_name,product_type,product_rating,product_price}=req.body
      console.log(product_name)
      const sql="insert into images(product_name,product_type,product_rating,product_price,filename)values (?,?,?,?, ?)"
      db.query(sql,[product_name,product_type,product_rating,product_price,filename],(err,result)=>{
        if(err)throw err;
        // console.log('file uploaded')
        // res.redirect("/")
        res.send('data submited')
      })
    }
  })
})


app.post('/submit',(req,res)=>{
  const product_name=req.body.product_name
  const product_type=req.body.product_type
  const product_rating=req.body.product_rating
  const product_price=req.body.product_price
  const value=[[product_name,product_type,product_rating,product_price]]
  const sql="insert into navbar(product_name,product_type,product_rating,product_price)values ?"
  db.query(sql,[value],(err,result)=>{
    if(err)throw err;
    else{
      res.send('data submitted')
    }
  })
})
app.post('/adminsignin',(req,res)=>{
  const email=req.body.email;
  const password=req.body.password;
  const sql="select * from admin where email=? and password=?"
  db.query(sql,[email,password],(err,result)=>{
    if(err)throw err;
    else{
      if(result.length>0){
       res.send(true)
      }
      else{
        res.send(false)
      }
    }
  })
})

app.post('/add',(req,res)=>{
  const product_name=req.body.product_name
  const product_type=req.body.product_type
  const product_rating=req.body.product_rating
  const product_price=req.body.product_price
  const value=[[product_name,product_type,product_rating,product_price]]
  const sql="insert into card(product_name,product_type,product_rating,product_price)values ?"
  db.query(sql,[value],(err,result)=>{
    if(err)throw err;
    else{
      res.send("add to cart")
    }
  })
})
app.get('/takedata',(req,res)=>{
  const sql="select *from card"
  db.query(sql,(err,result)=>{
    if(err)throw err;
    else{
      res.json(result)
    }
  })
})


app.get('/',(req,res)=>{
  res.sendFile(__dirname+"/signup.jsx")
})
app.get('/adminsignin',(req,res)=>{
  res.sendFile(__dirname+"/adminsignin.jsx")
})
app.get('/admin',(req,res)=>{
  res.sendFile(__dirname+"/admin")
})

app.get('/getdata',(req,res)=>{
  const sql="select *from images"
  db.query(sql,(err,result)=>{
    if(err)throw err;
    else{
      res.json(result)
    }
  })
})
app.delete('/deletedata/:id',(req,res)=>{
  const id=req.params.id
  const sql="delete from images where id=?"
  db.query(sql,[id],(err,result)=>{
    if(err)throw err;
    else{
      res.send('data deleted')
    }
  })
})
app.put('/updatedata/:id',(req,res)=>{
  const id=req.params.id
   const newdata=req.body
   const sql="update images set ? where id =?"
   db.query(sql,[newdata,id],(err,result)=>{
    if(err)throw err;
    else{
      res.send('data updated')
    }
   })
})
app.get('/data/:id',(req,res)=>{
  const id=req.params.id
  const sql="select *from images where id=?"
  db.query(sql,[id],(err,result)=>{
    if(err)throw err;
    else{
      res.json(result)
    }
  })
})
app.get('/inpdata/:value',(req,res)=>{
 const data=req.params.value
 const sql="select *from images where product_name like ?"
 db.query(sql,['%' + data + '%'],(err,result)=>{
  if(err)throw err;
  else{
    res.json(result)
  }
 })
})
app.get('/product1',(req,res)=>{
  const sql="select *from images where product_price between 2000 and 3000"
  db.query(sql,(err,result)=>{
    if(err)throw err;
    else{
      res.json(result)
    }
  })
})
app.get('/product2',(req,res)=>{
  const sql="select *from images where product_price between 3000 and 5000"
  db.query(sql,(err,result)=>{
    if(err)throw err;
    else{
      res.json(result)
    }
  })
})
app.get('/product3',(req,res)=>{
  const sql="select *from images where product_price between 5000 and 7000"
  db.query(sql,(err,result)=>{
    if(err)throw err;
    else{
      res.json(result)
    }
  })
})
app.get('/brand1',(req,res)=>{
  const sql="select *from images where product_name='puma'"
  db.query(sql,(err,result)=>{
    if(err)throw err;
    else{
      res.json(result)
    }
  })
})
app.get('/brand2',(req,res)=>{
  const sql="select *from images where product_name='adidas'"
  db.query(sql,(err,result)=>{
    if(err)throw err;
    else{
      res.json(result)
    }
  })
})
app.get('/brand3',(req,res)=>{
  const sql="select *from images where product_name='woodland'"
  db.query(sql,(err,result)=>{
    if(err)throw err;
    else{
      res.json(result)
    }
  })
})
app.get('/brand4',(req,res)=>{
  const sql='select *from images where product_name="samsung"'
  db.query(sql,(err,result)=>{
    if(err)throw err;
    else{
      res.json(result)
    }
  })
})
app.get('/product4',(req,res)=>{
  const sql="select *from images where product_price>7000"
  db.query(sql,(err,result)=>{
    if(err)throw err;
    else{
      res.json(result)
    }
  })
})
app.get('/alldata',(req,res)=>{
  const sql="select *from card"
  db.query(sql,(err,result)=>{
    if(err)throw err;
    else{
      res.json(result)
    }
  })
})
app.delete('/deletecarts/:id',(req,res)=>{
  const id=req.params.id
  const sql="delete from card where id=?"
  db.query(sql,[id],(err,result)=>{
    if(err)throw err;
    else{
      res.send("data deleted")
    }
  })
})
app.listen(3000,()=>{
  console.log('server is running on port 3000')
})