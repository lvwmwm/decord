// Module ID: 13781
// Function ID: 13782
// Name: __exportStarResult5
// Dependencies: []

// Module 13781 (__exportStarResult5)
arg5.GetOptionsObject = function GetOptionsObject(obj) {
  if (undefined === obj) {
    const _Object = Object;
    return Object.create(null);
  } else if (typeof obj === "object") {
    return obj;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Options must be an object");
    throw typeError;
  }
};
