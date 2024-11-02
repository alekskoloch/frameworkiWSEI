const fs = require('fs');

const count = Number(process.argv[2]);

const carBrands = ['Toyota', 'Ford', 'BMW', 'Audi', 'Tesla'];
const colors = ['red', 'blue', 'green', 'yellow', 'black'];
const years = [1998, 2003, 2010, 2015, 2020];

const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomRating = () => Math.floor(Math.random() * 11);  // Losowy rating od 0 do 10

let objects = [];
for (let i = 0; i < count; i++) {
  const car = {
    id: i + 1,
    brand: randomElement(carBrands),
    year: randomElement(years),
    color: randomElement(colors),
    registration: `XYZ${Math.floor(1000 + Math.random() * 9000)}`,
    rating: randomRating()  // Losowy rating
  };
  objects.push(car);
}

const content = `export const data = ${JSON.stringify(objects, null, 2)};`;

fs.writeFile('./src/data/module-data.js', content, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("module-data.js generated successfully");
  }
});
