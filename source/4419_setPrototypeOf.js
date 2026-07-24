// Module ID: 4419
// Function ID: 38894
// Name: setPrototypeOf
// Dependencies: []

// Module 4419 (setPrototypeOf)
let setPrototypeOf = "undefined" !== typeof Reflect;
if (setPrototypeOf) {
  const _Reflect = Reflect;
  setPrototypeOf = Reflect.setPrototypeOf;
}
if (!setPrototypeOf) {
  setPrototypeOf = null;
}

export default setPrototypeOf;
