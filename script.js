"use strict"
//alert("hello word");

//const result = confirm('are yoe here?');
//console.log(result);

//const answer = +prompt('Вам есть 18?', 'yes');
//console.log(typeof(answer));

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



let i = 0;

while (i<2) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        i++;
        console.log('done');
    } else {
        i--;
        console.log('error');
        
    }
} 
//do {
    //const a = prompt('Один из последних просмотренных фильмов?', ''),
        //  b = prompt('На сколько оцените его?', '');
        //  personalMovieDB.movies[a] = b;
    //if (a != null && b != null && a != '' && b != '' && a.length < 50) {
     //   personalMovieDB.movies[a] = b;
    //    i++;
     //   console.log('done');
   // } else {
    //    console.log('error');
     //   i--;}

//} while (i<2);
//for (let i=0; i<2; i++) {
  //  const a = prompt('Один из последних просмотренных фильмов?', ''),
      //    b = prompt('На сколько оцените его?', '');
         // if (a != null && b != null && a != '' && b != '' && a.length < 50) {
   // personalMovieDB.movies[a] = b;

   // console.log('done');
   //     } else {
     //       console.log('Error');
    //        i--;
   //     }
//}
if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >=10 && personalMovieDB <30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >30) {
    console.log ("Вы киноман");
} else {
    console.log("Произошла ошибка")
}
console.log(personalMovieDB);
