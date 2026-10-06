// Module ID: 1200
// Function ID: 1201
// Name: typeofJsonValue
// Dependencies: []
// Exports: isJsonObject, typeofJsonValue

// Module 1200 (typeofJsonValue)

export const typeofJsonValue = function typeofJsonValue(obj) {
  if (typeof obj === "object") {
    const _Array = Array;
    if (Array.isArray(obj)) {
      return "array";
    } else if (null === obj) {
      return "null";
    }
  }
  return typeof obj;
};
export const isJsonObject = function isJsonObject(obj) {
  let tmp = null !== obj && typeof obj === "object";
  if (tmp) {
    const _Array = Array;
    tmp = !Array.isArray(obj);
  }
  return tmp;
};
