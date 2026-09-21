// Module ID: 1192
// Function ID: 1193
// Name: typeofJsonValue
// Dependencies: []
// Exports: isJsonObject, typeofJsonValue

// Module 1192 (typeofJsonValue)

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
