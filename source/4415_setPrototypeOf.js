// Module ID: 4415
// Function ID: 38861
// Name: setPrototypeOf
// Dependencies: []

// Module 4415 (setPrototypeOf)
let setPrototypeOf = "undefined" !== typeof Reflect;
if (setPrototypeOf) {
  const _Reflect = Reflect;
  setPrototypeOf = Reflect.setPrototypeOf;
}
if (!setPrototypeOf) {
  setPrototypeOf = null;
}

export default setPrototypeOf;
