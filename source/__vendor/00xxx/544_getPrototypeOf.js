// Module ID: 544
// Function ID: 545
// Name: getPrototypeOf
// Dependencies: []

// Module 544 (getPrototypeOf)
let getPrototypeOf = typeof Reflect !== "undefined";
if (typeof Reflect !== "undefined") {
  const _Reflect = Reflect;
  getPrototypeOf = Reflect.getPrototypeOf;
}
if (!getPrototypeOf) {
  getPrototypeOf = null;
}

export default getPrototypeOf;
