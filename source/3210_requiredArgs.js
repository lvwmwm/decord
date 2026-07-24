// Module ID: 3210
// Function ID: 25826
// Name: requiredArgs
// Dependencies: []
// Exports: default

// Module 3210 (requiredArgs)

export default function requiredArgs(arg0, arg1) {
  if (arg1.length < arg0) {
    let _TypeError = TypeError;
    let str2 = "";
    const text = `${arg0} argument`;
    if (arg0 > 1) {
      str2 = "s";
    }
    const prototype = _TypeError.prototype;
    _TypeError = new _TypeError(text + str2 + " required, but only " + arg1.length + " present");
    throw _TypeError;
  }
};
export default exports.default;
