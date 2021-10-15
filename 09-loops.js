const animals = [
    "Cat",
    "Dog",
    "Hippo",
    "Rhino"
];

console.time('map')
animals.map(value => console.log(value))
console.timeEnd('map')

console.time('foreach')
animals.forEach(value => {
    console.log(value);
});
console.timeEnd('foreach')

console.time('for of')
for (const value of animals) {
    console.log(value);
}
console.timeEnd('for of')


console.time('for')
for (let i = 0; i < animals.length; i++) {
    const value = animals[i];
    console.log(value);
}
console.timeEnd('for')