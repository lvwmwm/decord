// Module ID: 1298
// Function ID: 1299
// Dependencies: []

// Module 1298
let apply = typeof Reflect !== "undefined";
if (typeof Reflect !== "undefined") {
  apply = Reflect;
}
if (apply) {
  const _Reflect = Reflect;
  apply = Reflect.apply;
}

export default apply;
