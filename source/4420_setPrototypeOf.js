// Module ID: 4420
// Function ID: 38906
// Name: setPrototypeOf
// Dependencies: []

// Module 4420 (setPrototypeOf)
let setPrototypeOf = "undefined" !== typeof Reflect;
if (setPrototypeOf) {
  const _Reflect = Reflect;
  setPrototypeOf = Reflect.setPrototypeOf;
}
if (!setPrototypeOf) {
  setPrototypeOf = null;
}

export default setPrototypeOf;
