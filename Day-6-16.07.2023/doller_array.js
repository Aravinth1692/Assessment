const countriesDetil = [
    { name: "Cyprus", currency: "Euro" },
    { name: "Croatia", currency: "Euro" },
    { name: "East Timor", currency: "US Dollar" },
    { name: "Ecuador", currency: "US Dollar" },
    { name: "Estonia", currency: "Euro" },
    { name: "El Salvador", currency: "US Dollar" },
    { name: "Georgia", currency: "Georgian lari" }
];

const countries = countriesDetil.filter(country => country.currency === "US Dollar");

console.log("Countries using US Dollar as currency:", countries);
