// Module ID: 4411
// Function ID: 38797
// Name: setPrototypeOf
// Dependencies: []

// Module 4411 (setPrototypeOf)
let setPrototypeOf = "undefined" !== typeof Reflect;
if (setPrototypeOf) {
  const _Reflect = Reflect;
  setPrototypeOf = Reflect.setPrototypeOf;
}
if (!setPrototypeOf) {
  setPrototypeOf = null;
}

export default setPrototypeOf;
