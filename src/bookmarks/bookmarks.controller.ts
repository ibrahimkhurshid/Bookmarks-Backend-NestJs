import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { Bookmark, BookmarkType } from './bookmark.entity';

@Controller('')
export class BookmarksController {
  constructor(private readonly bookmarksService: BookmarksService) { }

  @Post()
  create(@Body() bookmark: BookmarkType) {
    return this.bookmarksService.create(bookmark);
  }

  @Get()
  findAll() {
    return this.bookmarksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.bookmarksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id, @Body() bookmark: BookmarkType) {
    return this.bookmarksService.update(id, bookmark);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    return this.bookmarksService.remove(id);
  }
}
