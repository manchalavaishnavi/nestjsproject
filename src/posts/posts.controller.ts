import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import {PostsService} from "./posts.service"
import {PostsDto} from "./posts.dto"
import {Postinterface} from "./post.model"
@Controller('posts')
export class PostsController{
    constructor(private readonly PostsService:PostsService){}
    @Post()
    async test(@Body()post:PostsDto):Promise<{id:string}>{
        const postid=await this.PostsService.insertPost(post)
        return {id:postid}

    }
    @Get()
    async findallposts():Promise<Postinterface[]>{
        return this.PostsService.getposts()
    }
    @Get(':id')
    async findsinglepost(@Param('id') id:string): Promise<Postinterface>{
        return this.PostsService.getsinglepost(id)
    }
    @Patch(':id')
    async updatepost(@Param('id') id:string): Promise<Postinterface>{
        return this.PostsService.updatepost(id)
    }
    @Delete(':id')
    async deletepost(@Param('id') id:string): Promise<Postinterface>{
        return this.PostsService.deletepost(id)
    }
    @Patch('comment/:id')
    async addcomment(
        @Param('id') id:string,
        @Body('comment') comment:string
        ): Promise<Postinterface>{
            return this.PostsService.addcomment(id,comment)


    }

    
}