const key = "0abc4a5aa399a260390e9071ee3c5936"

const base_url = "https://api.themoviedb.org/3";

const endpoints = {
    popular:`${base_url}/movie/popular?api_key=${key}`,
    topRated:`${base_url}/movie/top_rated?api_key=${key}`,
    trending:`${base_url}/movie/popular?api_key=${key}&language=en-US&page=2`,

    comedy:`${base_url}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&
    include_adult=false`,

    upcoming:`${base_url}/movie/upcoming?api_key=${key}`,

};
 
    export function createImageUrl(filename, size) {
    return `https://image.tmdb.org/t/p/${size}/${filename}`;
    }


export default endpoints;