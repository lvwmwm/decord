// Module ID: 3381
// Function ID: 3382
// Name: requiredArgs
// Dependencies: []
// Exports: default

// Module 3381 (requiredArgs)

export default function requiredArgs(arg0, arg1) {
  if (arg1.length < arg0) {
    let str2 = "";
    const text = `${arg0} argument`;
    if (arg0 > 1) {
      str2 = "s";
    }
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError(text + str2 + " required, but only " + arg1.length + " present");
    throw typeError;
  }
};
export default exports.default;
