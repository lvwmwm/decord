// Module ID: 4157
// Function ID: 4158
// Name: requiredArgs
// Dependencies: []
// Exports: default

// Module 4157 (requiredArgs)

export default function requiredArgs(arg0, arg1) {
  if (arg1.length < arg0) {
    let str2 = "";
    const _TypeError = TypeError;
    const text = `${arg0} argument`;
    if (arg0 > 1) {
      str2 = "s";
    }
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const _TypeError1 = new _TypeError(text + str2 + " required, but only " + arg1.length + " present");
    throw _TypeError1;
  }
};
