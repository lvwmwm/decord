// Module ID: 4296
// Function ID: 37492
// Name: valueOf
// Dependencies: [579]

// Module 4296 (valueOf)
let prototype;
if (require("module_579")) {
  prototype = require("module_579").prototype;
}
let valueOf;
if (prototype) {
  valueOf = prototype.valueOf;
}

export default function cloneSymbol(arg0) {
  if (valueOf) {
    const _Object = Object;
    let ObjectResult = Object(valueOf.call(arg0));
  } else {
    ObjectResult = {};
  }
  return ObjectResult;
};
