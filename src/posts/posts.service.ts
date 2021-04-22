import { Injectable,NotFoundException} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose"
import {Model} from 'mongoose'
import {Postinterface} from "./post.model"
import {PostsDto} from "./posts.dto"
@Injectable()
export class PostsService{
    constructor(@InjectModel('Post') private readonly postModel:Model<Postinterface>){}
    async insertPost(post:PostsDto): Promise<string>{
        const newPost=new this.postModel(post)
        const result=await newPost.save()
        console.log('hello')
        return result.id
    }
    async getposts(): Promise<Postinterface[]>{
        const posts=await this.postModel.find()
        return posts
    }
    async getsinglepost(id): Promise<Postinterface>{
        let result;
        try{
            result =await this.postModel.findById(id)
        }catch(error){
            throw new NotFoundException('could not found')
        }
        if(!result){
            throw new NotFoundException('could not found')
        }
        return result
    }
    async updatepost(id:string): Promise<Postinterface>{
        let result;
        try{
            result=await this.postModel.findByIdAndUpdate({_id:id},{$inc:{likes:1}},{useFindAndModify:false,new:true})
        }catch(error){
            throw new NotFoundException('could not found')
        }
        if (!result){
            throw new NotFoundException('could not found')
        }
        return result
    }
    async deletepost(id:string): Promise<Postinterface>{
        let result;
        try{
            result= await this.postModel.findOneAndDelete({_id:id})
        }catch(error){
            throw new NotFoundException('could not found')

        }
        if (!result){
            throw new NotFoundException('could not found')
        }
        return result
    }
    async addcomment(id:string,comment:string): Promise<Postinterface>{
        let newcomment;
        var result;
        try{
            newcomment=await this.postModel.findByIdAndUpdate({_id:id},{$push:{comments:comment}},{upsert:false,useFindAndModify:false,new:true})
            var result=newcomment.save()
        }catch(error){
            throw new NotFoundException('could not found')
        }
        if (!newcomment){
            throw new NotFoundException('could not found')
        }
        return result
    }
}