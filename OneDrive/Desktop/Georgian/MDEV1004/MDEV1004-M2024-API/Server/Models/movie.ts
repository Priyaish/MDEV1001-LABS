import { Schema, model, Document } from 'mongoose';

// Define the IMovie interface
export interface IMovie {
    movieID: string;
    title: string;
    studio: string;
    genres: string[];
    directors: string[];
    writers: string[];
    actors: string[];
    year: number;
    length: number;
    shortDescription: string;
    mpaRating: string;
    criticsRating: number;
}

// Define the movie schema
const movieSchema = new Schema<IMovie>({
    movieID: String,
    title: String,
    studio: String,
    genres: [String],
    directors: [String],
    writers: [String],
    actors: [String],
    year: Number,
    length: Number,
    shortDescription: String,
    mpaRating: String,
    criticsRating: Number
});

// Create the Movie model
const Movie = model<IMovie>('Movie', movieSchema);

export default Movie;
