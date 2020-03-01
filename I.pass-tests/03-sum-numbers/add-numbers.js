function addNumbers(numbers) {
    return numbers.reduce((x, y) => x + y, 0);
}
module.exports = addNumbers;