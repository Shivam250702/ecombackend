const express=require('express');
const server=express();
const mongoose=require('mongoose');
const cors = require('cors');
const { createProduct } = require('./controller/Product');
const productrouter=require('./routes/Products');
const Categoriesrouter=require('./routes/Category');
const Brandrouter=require('./routes/Brands');
const userRouter=require('./routes/Users')
const authRouter=require('./routes/Auth')
const cartRouter=require('./routes/Cart')
const orderRouter=require('./routes/Order')
//middleware s

server.use(cors({
    exposedHeaders:['X-Total-Count']
}))
server.use(express.json()); //to parse req.body
server.use('/products',productrouter.router);
server.use('/categories',Categoriesrouter.router);
server.use('/brands',Brandrouter.router);
server.use('/users',userRouter.router);
server.use('/auth',authRouter.router);
server.use('/cart',cartRouter.router);
server.use('/orders',orderRouter.router);

//middleware

main().catch(err=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/eco');
    console.log("database connected");
    //it shows database is connected
}

server.get('/',(req,res)=>{
    res.json({status:'success'});
})
server.post ('/products',createProduct);

server.listen(8080,()=>{
    console.log("server started");

    //it shows server is started
})