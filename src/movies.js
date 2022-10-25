// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr.map(function (obj) {
    return obj.director;
  });
}

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  return arr.filter(function (obj) {
    return obj.director === 'Steven Spielberg' && obj.genre.includes('Drama');
  }).length;
}

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################
//Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    const totalSum = arr.reduce(function (acc, value) {
      if (!value.score) return acc;
      return acc + value.score;
    }, 0);
    return +(totalSum / arr.length).toFixed(2);
  }
}

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(arr) {
  const drama = arr.filter(function (obj) {
    return obj.genre.includes('Drama');
  });
  if (drama.length === 0) return 0;
  return scoresAverage(drama);
}

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const orderByYear = arr
    .map((obj) => obj)
    .sort(function (a, b) {
      return a.year - b.year || a.title.localeCompare(b.title);
    });
  return orderByYear;
}

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const alphabeticOrder = orderByYear(arr)
    .sort(function (a, b) {
      return a.title.localeCompare(b.title);
    })
    .map(function (obj) {
      return obj.title;
    });
  return alphabeticOrder.slice(0, 20);
}

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  const newArr = arr.map(function (obj) {
    return {
      duration:
        Number(obj.duration.slice(0, obj.duration.indexOf('h')) * 60) +
        Number(
          obj.duration.slice(
            obj.duration.indexOf('h') + 1,
            obj.duration.indexOf('min')
          )
        )
    };
    // });
  });
  console.log(newArr);
  return newArr;
}

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  if (!arr.length) return null;
  const best = arr.reduce(
    function (best, movie) {
      const average = scoresAverage(
        arr.filter(function (obj) {
          return obj.year === movie.year;
        })
      );
      if (
        average > best.rate ||
        (average === best.rate && movie.year < best.year)
      ) {
        best.year = movie.year;
        best.rate = average;
      }
      return best;
    },
    { year: null, rate: null }
  );
  return `The best year was ${best.year} with an average score of ${best.rate}`;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
