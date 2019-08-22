function scoreCalculator(arr) {
  // do work here
  let points;
  let pointsArr = [];

  let bonus = arr.every(e => {
    return e < 5;
  });
  if (bonus === true) {
    arr.map(e => {
      points = 10;
      pointsArr.push(points);
    });
    pointsArr.push(100);
  } else {
    arr.filter(e => {
      if (e === []) {
        points = -1;
      } else if (e > 10 && e < 21) {
        points = 0;
        pointsArr.push(points);
      } else if (e > 4 && e < 11) {
        points = 5;
        pointsArr.push(points);
      } else if (e < 5) {
        points = 10;
        pointsArr.push(points);
      }
      return pointsArr;
    });
  }

  let score = pointsArr.reduce((prev, curr) => {
    return prev + curr;
  });
  console.log("my points is", score);
}

// scoreCalculator([1, 2, 1, 4, 4, 2]);
module.exports = scoreCalculator;
