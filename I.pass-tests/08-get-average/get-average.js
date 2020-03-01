// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
const filterNumbers = x => typeof(x) === 'number' && !isNaN(x);

function average(array) {
    return array.filter(filterNumbers).reduce((x, y) => x + y, 0) / array.filter(filterNumbers).length;

}

module.exports = average;