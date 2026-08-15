// Module ID: 4608
// Function ID: 4609
// Name: valueOf
// Dependencies: [608]

// Module 4608 (valueOf)
let prototype;
if (require("module_608")) {
  prototype = require("module_608").prototype;
}
let valueOf;
if (prototype) {
  valueOf = prototype.valueOf;
}

export default function cloneSymbol(arg0) {
  if (valueOf) {
    const call = tmp.call;
    Object(typeof call === "unknown" ? tmp() : call(arg0));
  } else {
    return {};
  }
};
