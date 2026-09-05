// Module ID: 1289
// Function ID: 1290
// Name: getPrototypeOf
// Dependencies: []

// Module 1289 (getPrototypeOf)
let getPrototypeOf = typeof Reflect !== "undefined";
if (typeof Reflect !== "undefined") {
  const _Reflect = Reflect;
  getPrototypeOf = Reflect.getPrototypeOf;
}
if (!getPrototypeOf) {
  getPrototypeOf = null;
}

export default getPrototypeOf;
