// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(element => element.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(element => element.director === director);
  console.log("EXERCICE 2 ->", result);
  return result;
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesDirector = array.filter(element => element.director === director)
  let scoreDirector = moviesDirector.map(scoreMovie => scoreMovie.score)
  let sum = scoreDirector.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  let result = (sum / scoreDirector.length);
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let firstResult = array.map(film => film.title)
  .sort(firstResult)
  let result = firstResult.slice(0, 20);
  console.log("EXERCICE 4 ->", result);
  return result; 
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = array.map(element => element)
  .sort((a, b) => {
    if(a.year === b.year){
      return a.title.localeCompare(b.title)  
    }
    return a.year - b.year})
  console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  console.log('array ', array)
  let moviesByCategory = array.filter((element)=> element.genre.includes(category) && element.score)
  console.log('moviesByCategory', moviesByCategory)
  let scoreByCategory = moviesByCategory.map(scoreCategory => scoreCategory.score)
  let sum = scoreByCategory.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  let average = (sum / moviesByCategory.length);
  let result = Math.round(average * 100) / 100;
  console.log("EXERCICE 6 ->", result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let formatDuration = array.map(element => {
    let r = element.duration
    .replace('h', ':')
    .replace('min', '')
    .replace(' ', ''); 
    let changeFormat = r.split(':');
    let toMinuts = Number(+changeFormat[0]) * 60 + Number(+changeFormat[1]);
    console.log('toMinuts ', toMinuts)

    let newElement = {
      title: element.title,
      year: element.year,
      director: element.director,
      duration: toMinuts,
      genre: element.genre,
      score: element.score
    }
    return newElement;
  })
  let result = formatDuration;
  
  console.log("EXERCICE 7 RESULT ->", result)
  return result;

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, any) {
  let filterYear = array.filter(element => element.year === any)
  .sort((a, b)=> b.score - a.score);
  let result = filterYear.splice(0,1)
  console.log("EXERCICE 8 ->", result);
  return result;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
