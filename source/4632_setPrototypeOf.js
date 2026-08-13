// Module ID: 4632
// Function ID: 4633
// Name: setPrototypeOf
// Dependencies: []

// Module 4632 (setPrototypeOf)
let setPrototypeOf = typeof Reflect !== "undefined";
if (typeof Reflect !== "undefined") {
  const _Reflect = Reflect;
  setPrototypeOf = Reflect.setPrototypeOf;
}
if (!setPrototypeOf) {
  setPrototypeOf = null;
}

export default setPrototypeOf;
