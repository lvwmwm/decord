// Module ID: 3466
// Function ID: 26830
// Name: formatRFC7231
// Dependencies: []
// Exports: default

// Module 3466 (formatRFC7231)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = [null, null, null, null, null, null, null];
let closure_4 = [];

export default function formatRFC7231(defaultResult1) {
  if (arguments.length < 1) {
    const _TypeError = TypeError;
    const concat2 = "1 arguments required, but only ".concat;
    const typeError = new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
    throw typeError;
  } else {
    const defaultResult = closure_0.default(defaultResult1);
    if (closure_1.default(defaultResult)) {
      const uTCFullYear = defaultResult.getUTCFullYear();
      defaultResult1 = closure_2.default(defaultResult.getUTCDate(), 2);
      const defaultResult2 = closure_2.default(defaultResult.getUTCHours(), 2);
      const concat = "".concat;
      const defaultResult3 = closure_2.default(defaultResult.getUTCMinutes(), 2);
      const combined = "".concat(closure_3[defaultResult.getUTCDay(defaultResult)], ", ");
      const combined1 = combined.concat(defaultResult1, " ");
      const combined2 = combined1.concat(closure_4[defaultResult.getUTCMonth(defaultResult)], " ");
      const combined3 = combined2.concat(uTCFullYear, " ");
      const combined4 = combined3.concat(defaultResult2, ":");
      const combined5 = combined4.concat(defaultResult3, ":");
      return combined5.concat(closure_2.default(defaultResult.getUTCSeconds(), 2), " GMT");
    } else {
      const _RangeError = RangeError;
      const rangeError = new RangeError("Invalid time value");
      throw rangeError;
    }
  }
};
export default exports.default;
