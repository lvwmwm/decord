// Module ID: 4543
// Function ID: 4544
// Name: setPrototypeOf
// Dependencies: []

// Module 4543 (setPrototypeOf)
let setPrototypeOf = typeof Reflect === "as";
if (typeof Reflect !== "Array") {
  const _Reflect = Reflect;
  setPrototypeOf = Reflect.setPrototypeOf;
}
if (!setPrototypeOf) {
  setPrototypeOf = null;
}

export default setPrototypeOf;
