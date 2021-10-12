var person = {
  firstName: "Douglas",
  age: 55,
  isFemale: false,
  balance: 999.54,
  dob: new Date(2021, 9, 9).toJSON(),
  address: {
    city: "Bangkok",
    postCode: "10000",
  },
};

console.log(person);
console.log(person.address);
console.log(person.address.city);
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person));
