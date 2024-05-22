import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private service: SongsService){}
    @Get()
    findAll(){
        return this.service.findAll();
    }

    @Post(":id")
    createSong(@Body() createSongDto: CreateSongDTO){
        return this.service.create(createSongDto);
    }

    @Put(":id")
    updateSong(){
        return `updating song ... `;
    }

    @Get(":id")
    findOne(){
        return "find one by Id..";
    }

    @Delete(":id")
    deleteOne(){
        return "deleting One";
    }

}
