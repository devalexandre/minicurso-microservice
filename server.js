const polka = require('polka')
const { json } = require('@polka/parse')
const { response } = require("./util/response")
// rotas
const user = require('./routes/users')

const PORT = 3333

polka()
    .use(json())
  .use('user',user)
    .get("/",(req,res)=> response(res,{msg:"it`s Work !!!"}))
    .listen(PORT,err =>{
        console.log(`> Running on localhost:${PORT}`)
    })
