// Module ID: 5694
// Function ID: 5695
// Dependencies: []

// Module 5694
let setPrototypeOf = typeof Reflect !== "undefined";
if (typeof Reflect !== "undefined") {
  const _Reflect = Reflect;
  setPrototypeOf = Reflect.setPrototypeOf;
}
if (!setPrototypeOf) {
  setPrototypeOf = null;
}

export default setPrototypeOf;
