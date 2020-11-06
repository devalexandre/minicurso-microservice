const cote = require('cote')
const UserService = new cote.Responder({name:'UserService'})
const User = require('../models/User')

    UserService.on('user::get',async (req,cb) =>{
        cb(await User.get())
    })

    UserService.on('user::post',async (req,cb) =>{
        cb(await User.post(req.data))
    })

    UserService.on('user::put',async (req,cb) =>{
        cb(await User.put(req.data))
    })

    UserService.on('user::delete',async (req,cb) =>{
        cb(await User.delete(req.data))
    })

