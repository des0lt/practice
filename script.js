


const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

a = prompt("Один из последних фильмов?");
b = prompt("Оценка?");
c = prompt("Один из последних фильмов?");
d = prompt("Оценка?");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);