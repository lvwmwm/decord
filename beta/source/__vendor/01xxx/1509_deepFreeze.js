// Module ID: 1509
// Function ID: 1510
// Name: deepFreeze
// Dependencies: []
// Exports: deepFreeze, isPlainObject

// Module 1509 (deepFreeze)

export const isPlainObject = function isPlainObject(obj) {
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
export function deepFreeze(arg0) {
  return arg0;
}
