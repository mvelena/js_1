'use strict';
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let name1 = prompt('Один из последних просмотренных фильмов?', '');
let rate = +prompt('На сколько оцените его?', '');
personalMovieDB.movies[name1] = rate;
let name2 = prompt('Один из последних просмотренных фильмов?', '');
let rate2 = +prompt('На сколько оцените его?', '');
personalMovieDB.movies[name2] = rate2;


