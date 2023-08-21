const countriesDetails = [
    { name: "Afghanistan", capital: "Kabul", flag: "flag_1" },
    { name: "Albania", capital: "Tirana (Tirane)", flag: "flag_2" },
    { name: "Algeria", capital: "Algiers", flag: "flag_3" },
    { name: "Angola", capital: "Luanda", flag: "flag_4" },
    { name: "Australia", capital: "Canberra", flag: "flag_5" },
    { name: "Bahrain", capital: "Manama", flag: "flag_6" },
    { name: "Bangladesh", capital: "Dhaka", flag: "flag_7" },
    { name: "Barbados", capital: "Bridgetown", flag: "flag_8" },
    { name: "Belize", capital: "Belmopan", flag: "flag_9" }
];

countriesDetails.forEach(country => {
    console.log("Name   :", country.name);
    console.log("Capital:", country.capital);
    console.log("Flag   :", country.flag);
    console.log("  "); 
});
