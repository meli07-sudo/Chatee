const { isValid } = require("mongoose").Types.ObjectId,
  MessageModel = require("../models/Message"),
  UserModel=require('../models/User');
let getAllMsgS = async (req, res) => {0
    let messages=await MessageModel.find()
    res.status(200).json({
        "count":messages.length,
        messages
    })
};
let getMsg = async (req, res) => {
    const {_id}=req.params
    if(isValid(_id)){
        const userMsg=await MessageModel.find({by:_id})
        res.status(200).json({
            count:userMsg.length,
            messages:userMsg
        })
    } else{
        res.status(404).send(`${_id} not found`)
    }
};
let createMsg = async (req, res) => {
    const {_id,content}=req.body

    if(isValid(_id)){
        const user=await UserModel.findOne({_id})
        if(user){
            const msg=new MessageModel({
                content,
                by:_id
            })
            msg.save()
            res.status(201).send('Msg created successfully')
        } else
            res.status(404).send(`${_id} not exist`)
    } else{
        res.status(400).send('Invalid ID')
    }
};
let updateMsg = async (req, res) => {};
let deleteMsg = async (req, res) => {};

module.exports = { getAllMsgS, getMsg, createMsg, updateMsg, deleteMsg };
