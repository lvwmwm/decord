// Module ID: 1295
// Function ID: 1296
// Name: apply
// Dependencies: []

// Module 1295 (apply)
let apply = typeof Reflect !== "undefined";
if (typeof Reflect !== "undefined") {
  apply = Reflect;
}
if (apply) {
  const _Reflect = Reflect;
  apply = Reflect.apply;
}

export default apply;
