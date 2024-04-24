export class CreateMovieDto {
    title: string;
    description: string;
    release: Date = new Date();
    genre: string;
}
