function secondLargest(array) {
    biggest = Math.max(...array);
    array.splice(array.indexOf(biggest), 1);
    return Math.max(...array);

}

module.exports = secondLargest;