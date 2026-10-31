// Module ID: 1518
// Function ID: 1519
// Name: deepFreeze
// Dependencies: []
// Exports: deepFreeze, isPlainObject

// Module 1518 (deepFreeze)

export function isPlainObject(obj) {
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
}
export function deepFreeze(arg0) {
  return arg0;
}
