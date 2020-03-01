function sales(array) {
    distinctBrands = array.map(x => x.make).filter((v, i, a) => a.indexOf(v) == i)

    let total = {};

    for (brand of distinctBrands) {
        let key = brand;
        total[key] = array
            .filter(y => y.make === brand)
            .map(p => p.price)
            .reduce((j, k) => j + k, 0);
    }
    return total;



}

module.exports = sales;