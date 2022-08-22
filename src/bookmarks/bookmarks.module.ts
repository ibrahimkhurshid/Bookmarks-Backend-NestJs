import { Module } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { BookmarksController } from './bookmarks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookmark } from './bookmark.entity';

@Module({
  controllers: [BookmarksController],
  providers: [BookmarksService],
  imports: [TypeOrmModule.forFeature([Bookmark])]
})
export class BookmarksModule { }
