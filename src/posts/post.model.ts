import * as mongoose from "mongoose"
export const Postschema=new mongoose.Schema({
    name:{type:String,required:true},
    location:{type:String,required:true},
    description:{type:String,required:true},
    likes:{type:Number,default:0},
    date:{type:Date,default:new Date()},
    comments:[{type:String}]
})

export interface Postinterface extends mongoose.Document{
    id:string,
    name:string,
    location:string,
    description:string,
    likes:number,
    date:Date,
    comment:string[]
}