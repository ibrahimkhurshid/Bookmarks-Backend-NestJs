import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BookmarkType } from './bookmark.entity';
import { Bookmark } from './bookmark.entity';

@Injectable()
export class BookmarksService {

  constructor(
    @InjectRepository(Bookmark)
    private bookmarkRepository: Repository<Bookmark>) { }


  create(bookmark: BookmarkType) {
    return this.bookmarkRepository.save(bookmark);
  }

  findAll() {
    return this.bookmarkRepository.find();
  }

  findOne(id: number) {
    return this.bookmarkRepository.find({ where: { 'id': id } });
  }

  update(id: number, bookmark: BookmarkType) {
    return `This action updates a #${id} bookmark`;
  }

  remove(id: number) {
    return this.bookmarkRepository.delete(id);
  }
}
