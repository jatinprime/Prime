const express = require('express') ;
const app = express() ;
// const connectDB = require('./config/db') ;
// const dotenv = require('dotenv') ;
// const productRoutes = require('./routes/productRoutes') ;

// connectDB() ;
// dotenv.config() ;

const PORT = process.env.PORT || 3000 ;

app.use(express.static('dist')) ;
// -> /api/users -> this will send the thing to users

// app.get('/' , (req , res) => {
//     res.status(200).json({
//         message : "Successfully running"
//     })
// })
app.get('/api/jokes' , (req , res)=>{
    const jokes = [ 
        {
            id : 1 , 
            title : "First JOke",
            content : "This is first joke"
        },
        {
            id : 2 , 
            title : "Second JOke",
            content : "This is second joke"
        }
    ]
    res.send(jokes) ;
})

// app.use('/api' , productRoutes) ;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`) ;
});




