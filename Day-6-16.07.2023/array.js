const countries = [
    { name: "Afghanistan", continent: "Asia" },
    { name: "Armenia", continent: "Asia" },
    { name: "Azerbaijan", continent: "Asia" },
    { name: "Bahrain", continent: "Asia" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Bhutan", continent: "Asia" },
    { name: "Brunei", continent: "Asia" },
    { name: "Cambodia", continent: "Asia" },
    { name: "China", continent: "Asia" },
    { name: "Cyprus", continent: "Asia" },
    { name: "Georgia", continent: "Asia" },
    { name: "India", continent: "Asia" },
    { name: "Indonesia", continent: "Asia" },
    { name: "Iran", continent: "Asia" },
    { name: "Iraq", continent: "Asia" },
    { name: "Israel", continent: "Asia" },
    { name: "Japan", continent: "Asia" },
    { name: "Jordan", continent: "Asia" },
    { name: "Kazakhstan", continent: "Asia" },
    { name: "Kuwait", continent: "Asia" },
    { name: "Kyrgyzstan", continent: "Asia" },
    { name: "Laos", continent: "Asia" },
    { name: "Lebanon", continent: "Asia" },
    { name: "Malaysia", continent: "Asia" },
    { name: "Maldives", continent: "Asia" },
    { name: "Mongolia", continent: "Asia" },
    { name: "Myanmar", continent: "Asia" },
    { name: "Nepal", continent: "Asia" },
    { name: "North Korea", continent: "Asia" },
    { name: "Oman", continent: "Asia" },
    { name: "Pakistan", continent: "Asia" },
    { name: "Palestine", continent: "Asia" },
    { name: "Philippines", continent: "Asia" },
    { name: "Qatar", continent: "Asia" },
    { name: "Saudi Arabia", continent: "Asia" },
    { name: "Singapore", continent: "Asia" },
    { name: "South Korea", continent: "Asia" },
    { name: "Sri Lanka", continent: "Asia" },
    { name: "Syria", continent: "Asia" },
    { name: "Taiwan", continent: "Asia" },
    { name: "Tajikistan", continent: "Asia" },
    { name: "Thailand", continent: "Asia" },
    { name: "Timor-Leste", continent: "Asia" },
    { name: "Turkey", continent: "Asia" },
    { name: "Turkmenistan", continent: "Asia" },
    { name: "United Arab Emirates", continent: "Asia" },
    { name: "Uzbekistan", continent: "Asia" },
    { name: "Vietnam", continent: "Asia" },
    { name: "Yemen", continent: "Asia" },
    { name :'Albania',continent: "Europe" },
    { name: "Andorra", continent: "Europe" },
    { name: "Belarus", continent: "Europe" },
    { name: "United Kingdom", continent: "Europe" },

];
  const Countries = countries.filter(country => country.continent === "Asia");
  console.log(Countries)    