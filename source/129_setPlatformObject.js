// Module ID: 129
// Function ID: 2154
// Name: setPlatformObject
// Dependencies: []

// Module 129 (setPlatformObject)
let closure_0 = Symbol("isPlatformObject");
let closure_1 = Symbol("clonePlatformObject");
arg5.setPlatformObject = function setPlatformObject(arg0, clone) {
  if ("function" === typeof arg0) {
    arg0.prototype[closure_0] = true;
    if (clone) {
      arg0.prototype[closure_1] = clone.clone;
    }
  } else {
    arg0[closure_0] = true;
    if (clone) {
      arg0[closure_1] = clone.clone;
    }
  }
};
arg5.isPlatformObject = function isPlatformObject(arg0) {
  return closure_0 in arg0;
};
arg5.getPlatformObjectClone = function getPlatformObjectClone(arg0) {
  return arg0[closure_1];
};
