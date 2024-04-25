import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException } from '@nestjs/common';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly moviesRepository: Repository<Movie>){

  }
  async create(createMovieDto: CreateMovieDto) {
    try {
      const movie = this.moviesRepository.create
      (createMovieDto)
      return await this.moviesRepository.save(movie);
    } catch (error) {
      console.log(error)
      throw new HttpException('BadRequest', HttpStatus.BAD_REQUEST);
    }
     
  }

  async findAll() {
    try {
        return await this.moviesRepository.find();
    } catch (error) {
  console.log(error)
  throw new HttpException('BadRequest', HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number) {
    try{ 
    return await this.moviesRepository.findOne({where: {id}})
    }catch (error) {
      console.log(error)
      throw new HttpException('BadRequest', HttpStatus.BAD_REQUEST);
        }
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    try{
    const movie = await this.findOne(id)
    if(!movie) {
      throw new NotFoundException();
    }
    Object.assign(movie,updateMovieDto)
    return await this.moviesRepository.save(movie)}
    catch (error) {
      console.log(error)
      throw new HttpException('BadRequest', HttpStatus.BAD_REQUEST);
        }
  }

  async remove(id: number) {
    try{
    const movie = await this.findOne(id)
      if(!movie) {
      throw new NotFoundException();
    }
    return await this.moviesRepository.remove(movie);
  }catch (error) {
    console.log(error)
    throw new HttpException('BadRequest', HttpStatus.BAD_REQUEST);
      }
  }
}
