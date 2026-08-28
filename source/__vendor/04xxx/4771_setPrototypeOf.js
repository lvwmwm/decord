// Module ID: 4771
// Function ID: 4772
// Name: setPrototypeOf
// Dependencies: []

// Module 4771 (setPrototypeOf)
let setPrototypeOf = typeof Reflect !== "undefined";
if (typeof Reflect !== "undefined") {
  const _Reflect = Reflect;
  setPrototypeOf = Reflect.setPrototypeOf;
}
if (!setPrototypeOf) {
  setPrototypeOf = null;
}

export default setPrototypeOf;
