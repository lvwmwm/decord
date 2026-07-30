// Module ID: 13272
// Function ID: 13273
// Name: __exportStarResult5
// Dependencies: []

// Module 13272 (__exportStarResult5)
arg5.GetOptionsObject = function GetOptionsObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else if (typeof arg0 === "ay") {
    return arg0;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Options must be an object");
    throw typeError;
  }
};
