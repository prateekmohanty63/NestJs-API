import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service'
import { Item } from './interfaces/item.interface'
// import {Request,Response} from 'express'

@Controller('items')
export class ItemsController {

    // ONE Method of accessing request and response object in Nestjs
    // @Get()
    // findAll(@Req() req:Request,@Res() res:Response):Response{
    //     console.log(req.url)
    //     return res.send('Hello World')
    //     //return 'Get all items';
    // }

    // Fetch all items
    @Get()
    findAll(): String {
        return 'Get all items';
    }

    // Fetch particluar item
    @Get(':id')
    findOne(@Param() param) {
        return `Item ${param.id}`
    }

    // Post item
    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name:${createItemDto.name} Desc:${createItemDto.description}`
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete ${id}`
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
        return `Update ${id} - Name: ${updateItemDto.name}`
    }
}


