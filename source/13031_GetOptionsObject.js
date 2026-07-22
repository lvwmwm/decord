// Module ID: 13031
// Function ID: 99272
// Name: GetOptionsObject
// Dependencies: []

// Module 13031 (GetOptionsObject)
arg5.GetOptionsObject = function GetOptionsObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else if ("object" === typeof arg0) {
    return arg0;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Options must be an object");
    throw typeError;
  }
};
