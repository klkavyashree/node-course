const fs = require('fs');

const book = {
    title: "Holiday",
    author: "kavya"
}
const bookJson = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJson);

const bufferData = fs.readFileSync('1-json.json');
const bufferJson = bufferData.toString();
const parsedData = JSON.parse(bufferJson);
console.log(parsedData);