// Module ID: 1320
// Function ID: 1321
// Dependencies: []

// Module 1320
let apply = typeof Reflect !== "undefined";
if (typeof Reflect !== "undefined") {
  apply = Reflect;
}
if (apply) {
  const _Reflect = Reflect;
  apply = Reflect.apply;
}

export default apply;
