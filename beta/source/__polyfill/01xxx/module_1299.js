// Module ID: 1299
// Function ID: 1300
// Dependencies: []

// Module 1299
let getPrototypeOf = typeof Reflect !== "undefined";
if (typeof Reflect !== "undefined") {
  const _Reflect = Reflect;
  getPrototypeOf = Reflect.getPrototypeOf;
}
if (!getPrototypeOf) {
  getPrototypeOf = null;
}

export default getPrototypeOf;
