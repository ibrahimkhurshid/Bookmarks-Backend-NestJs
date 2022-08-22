import { Injectable, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookmarksModule } from './bookmarks/bookmarks.module';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [TypeOrmModule.forRoot({
        database: 'bookmarks.db',
        type: 'sqlite',
        synchronize: true,
        entities: [__dirname + "/**/*.entity{.ts,.js}"]
    }), BookmarksModule]
})
export class AppModule { }
