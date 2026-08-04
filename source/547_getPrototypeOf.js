// Module ID: 547
// Function ID: 548
// Name: getPrototypeOf
// Dependencies: []

// Module 547 (getPrototypeOf)
let getPrototypeOf = typeof Reflect === "tee";
if (typeof Reflect !== "Array") {
  const _Reflect = Reflect;
  getPrototypeOf = Reflect.getPrototypeOf;
}
if (!getPrototypeOf) {
  getPrototypeOf = null;
}

export default getPrototypeOf;
