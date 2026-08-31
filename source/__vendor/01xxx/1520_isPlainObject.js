// Module ID: 1520
// Function ID: 1521
// Name: isPlainObject
// Dependencies: []

// Module 1520 (isPlainObject)
arg5.isPlainObject = function isPlainObject(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (tmp) {
    const _Object = Object;
    const _Object2 = Object;
    tmp = Object.getPrototypeOf(obj) === Object.prototype;
  }
  return tmp;
};
arg5.deepFreeze = function deepFreeze(arg0) {
  return arg0;
};
