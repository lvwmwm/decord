// Module ID: 15330
// Function ID: 15331
// Name: GetOptionsObject
// Dependencies: []
// Exports: GetOptionsObject

// Module 15330 (GetOptionsObject)

export function GetOptionsObject(obj) {
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
}
