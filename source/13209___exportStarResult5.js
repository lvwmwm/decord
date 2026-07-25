// Module ID: 13209
// Function ID: 101882
// Name: __exportStarResult5
// Dependencies: []

// Module 13209 (__exportStarResult5)
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
