// Module ID: 14443
// Function ID: 14444
// Name: GetOptionsObject
// Dependencies: []
// Exports: GetOptionsObject

// Module 14443 (GetOptionsObject)

export const GetOptionsObject = function GetOptionsObject(obj) {
  if (undefined === obj) {
    const _Object = Object;
    return Object.create(null);
  } else if (typeof obj === "object") {
    return obj;
  } else {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("Options must be an object");
    throw typeError;
  }
};
