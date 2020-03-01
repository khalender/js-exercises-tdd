function removeMiddle(array) {
    let middle = []
    let midIndex = Math.floor(array.length / 2);
    let midValue = array[midIndex];
    console.log(midIndex);
    middle.push(midValue);
    array.splice(midIndex, 1);
    return middle;

}

module.exports = removeMiddle;