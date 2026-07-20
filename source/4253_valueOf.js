// Module ID: 4253
// Function ID: 37271
// Name: valueOf
// Dependencies: []

// Module 4253 (valueOf)
let prototype;
if (require(dependencyMap[0])) {
  prototype = require(dependencyMap[0]).prototype;
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
