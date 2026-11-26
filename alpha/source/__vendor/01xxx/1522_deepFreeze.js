// Module ID: 1522
// Function ID: 1523
// Name: deepFreeze
// Dependencies: []
// Exports: deepFreeze, isPlainObject

// Module 1522 (deepFreeze)

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
