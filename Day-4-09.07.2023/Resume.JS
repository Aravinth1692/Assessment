const jsonData = {
  "Name": "Sri",
  "Age": 30,
  "email": "johndoe@example.com",
};

// Case 1: Iterate over a JSON object

// for...in loop

for (let key in jsonData) {
  console.log(key + ": " + jsonData[key]);
}