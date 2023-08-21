const countriesDetail = [
    { name: "India", population: 1428627663 },
    { name: "China", population: 1425671352 },
    { name: "Congo", population: 6106869 },
    { name: "Nauru", population: 12780 },
    { name: "Anguilla", population: 15899 },
    { name: "Palau", population: 18058 }
];

const totalPopulation = countriesDetail.reduce((accumulator, country) => {
    return accumulator + country.population;
}, 0);

console.log("Total Population:", totalPopulation);
