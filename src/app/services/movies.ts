export interface MovieResponseModel {
    page: number,
    results: IMovieModel[],
    total_pages: number,
    total_results: number,
}
export interface IGenreModel {
    id: number,
    name: string,
}
export interface IMovieModel {
    adult: boolean,
    backdrop_path: string,
    id: number,
    title: string,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    genre_ids: IGenreModel[],
    popularity: number,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}
