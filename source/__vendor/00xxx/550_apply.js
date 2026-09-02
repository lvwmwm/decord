// Module ID: 550
// Function ID: 551
// Name: apply
// Dependencies: []

// Module 550 (apply)
let apply = typeof Reflect !== "undefined";
if (typeof Reflect !== "undefined") {
  apply = Reflect;
}
if (apply) {
  const _Reflect = Reflect;
  apply = Reflect.apply;
}

export default apply;
