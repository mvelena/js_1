'use strict';
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let movieName = '',
    rate = '';
    
for (let i = 1; i<3; i++) {
    movieName = prompt('Один из последних просмотренных фильмов?', '');
    rate = prompt('На сколько оцените его?', '');
    /*while (movieName.length == 0 || movieName.length >50 || movieName == null) {
    movieName = prompt('Один из последних просмотренных фильмов?', '');
    };
    while (rate.length == 0) {
        rate = prompt('На сколько оцените его?', '');
    };
    personalMovieDB.movies[movieName] = rate;
    rate = '';*/
    if (movieName != '' && rate != '' && rate != null && movieName != null && movieName.length <= 50) {        
        personalMovieDB.movies[movieName] = rate;
    } else {
        i--;
    };
};
if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >=30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
};
console.log(personalMovieDB);
/*let i =2;
while (i > 0) {
    movieName = prompt('Один из последних просмотренных фильмов?', '');
    if (movieName.length == 0 || movieName.length >50) {
        movieName = prompt('Один из последних просмотренных фильмов?', '');
    };
    rate = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[movieName] = rate;
    i--;
}
*/

