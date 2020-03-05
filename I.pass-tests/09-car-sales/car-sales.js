function sales(array) {
    
    ///find distinct car brands and put them into an array
    distinctBrands = array.map(x => x.make).filter((v, i, a) => a.indexOf(v) == i)

    let total = {};

    
    for (brand of distinctBrands) { //loop throug distinct car brands
        let key = brand;
        total[key] = array 
            .filter(y => y.make === brand) // filter the car brand that is in the current brand
            .map(p => p.price) // get the price of the object
            .reduce((j, k) => j + k, 0); // add them up
    }
    return total;



}

module.exports = sales;
