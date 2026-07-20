// Module ID: 524
// Function ID: 6632
// Name: getPrototypeOf
// Dependencies: []

// Module 524 (getPrototypeOf)
let getPrototypeOf = "undefined" !== typeof Reflect;
if (getPrototypeOf) {
  const _Reflect = Reflect;
  getPrototypeOf = Reflect.getPrototypeOf;
}
if (!getPrototypeOf) {
  getPrototypeOf = null;
}

export default getPrototypeOf;
