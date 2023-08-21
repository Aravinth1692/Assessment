const countryArray = [
    { name: "country_1", populationCount: 150000 },
    { name: "country_2", populationCount: 250000 },
    { name: "country_3", populationCount: 80000 },
    { name: "country_4", populationCount: 180000 },
    { name: "country_5", populationCount: 2000000 },
    { name: "country_6", populationCount: 1000 },
    { name: "country_7", populationCount: 700000 },
    { name: "country_8", populationCount: 180000000 },
    { name: "country_9", populationCount: 180000 },
    { name: "country_10", populationCount: 18000 }
];

const getPopulationCount = countryArray.filter(country => country.populationCount < 200000);
console.log(getPopulationCount);

