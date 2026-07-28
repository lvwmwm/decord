// Module ID: 4454
// Function ID: 39020
// Name: setPrototypeOf
// Dependencies: []

// Module 4454 (setPrototypeOf)
let setPrototypeOf = "undefined" !== typeof Reflect;
if (setPrototypeOf) {
  const _Reflect = Reflect;
  setPrototypeOf = Reflect.setPrototypeOf;
}
if (!setPrototypeOf) {
  setPrototypeOf = null;
}

export default setPrototypeOf;
