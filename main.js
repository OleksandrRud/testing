"use strict";
// // alert("Hello");
// // const resolt = confirm("Are you here?");
// // console.log(resolt);

// // const answer = prompt("Вам вже є 18", "20");
// // console.log(answer);

// // const answers = [];

// // answers[0] = prompt("Ваше імя", "");
// // answers[1] = prompt("Ваш вік", "");
// // answers[2] = prompt("Ваше імя", "");

// // console.log(answers);
// // document.write(answers);

// const user = "Ivan";
// alert(`hello, ${user}`);
const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt("один из последнтх просмотркенных фильмов?", ""),
  b = prompt("На сколько вы бы его оценили ?", ""),
  c = prompt("один из последнтх просмотркенных фильмов?", ""),
  d = prompt("На сколько вы бы его оценили ?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
