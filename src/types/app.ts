export interface Movie {
    Title: string;
    imdbID: string;
    Year: string;
}

export interface IsFav {
    [key: string]: string | null | number | boolean;
}