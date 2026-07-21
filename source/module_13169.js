// Module ID: 13169
// Function ID: 99590
// Dependencies: []

// Module 13169
let getOwnPropertyDescriptor = require(dependencyMap[0]);
if (getOwnPropertyDescriptor) {
  const _Object = Object;
  getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
}
const tmp = require(dependencyMap[1])(prototype, "name");
let tmp2 = tmp;
if (tmp) {
  tmp2 = "something" === function something() {

  }.name;
}
let tmp3 = tmp;
if (tmp) {
  let tmp4 = !require(dependencyMap[0]);
  if (!tmp4) {
    tmp4 = require(dependencyMap[0]) && getOwnPropertyDescriptor(prototype, "name").configurable;
    const tmp5 = require(dependencyMap[0]) && getOwnPropertyDescriptor(prototype, "name").configurable;
  }
  tmp3 = tmp4;
}
const obj = { EXISTS: tmp, PROPER: tmp2, CONFIGURABLE: tmp3 };

export default obj;
