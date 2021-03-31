import {Module} from "@nestjs/common"
import { PostsController } from "./posts.controller";
import { PostsService } from "./posts.service";
import {MongooseModule} from "@nestjs/mongoose"
import {Schema} from "mongoose"
import {Postschema} from "./post.model"
@Module({
    imports:[MongooseModule.forFeature([{name:'Post',schema:Postschema}])],
    controllers:[PostsController],
    providers:[PostsService]
})

export class PostsModule{}