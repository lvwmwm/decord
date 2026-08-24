// Module ID: 4438
// Function ID: 4439
// Name: setPrototypeOf
// Dependencies: []

// Module 4438 (setPrototypeOf)
let setPrototypeOf = typeof Reflect !== "undefined";
if (typeof Reflect !== "undefined") {
  const _Reflect = Reflect;
  setPrototypeOf = Reflect.setPrototypeOf;
}
if (!setPrototypeOf) {
  setPrototypeOf = null;
}

export default setPrototypeOf;
