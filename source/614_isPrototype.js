// Module ID: 614
// Function ID: 7056
// Name: isPrototype
// Dependencies: []

// Module 614 (isPrototype)
let closure_0 = Object.prototype;

export default function isPrototype(arg0) {
  let constructor = arg0;
  if (arg0) {
    constructor = arg0.constructor;
  }
  return arg0 === ("function" === typeof constructor && constructor.prototype || closure_0);
};
