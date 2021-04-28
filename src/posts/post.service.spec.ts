import { Test, TestingModule } from '@nestjs/testing';
import {PostsService} from './posts.service'
import { getModelToken } from '@nestjs/mongoose';
import { postnodoc } from './post.interface'
import { createMock } from '@golevelup/nestjs-testing';
import { Model, Query } from 'mongoose';
import { Postinterface } from './post.model'