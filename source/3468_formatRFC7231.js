// Module ID: 3468
// Function ID: 26835
// Name: formatRFC7231
// Dependencies: [3209, 3391, 3452]
// Exports: default

// Module 3468 (formatRFC7231)
import _typeof from "_typeof";
import isValid from "isValid";
import addLeadingZeros from "addLeadingZeros";

let closure_3 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let closure_4 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function formatRFC7231(defaultResult1) {
  if (arguments.length < 1) {
    const _TypeError = TypeError;
    const concat2 = "1 arguments required, but only ".concat;
    const typeError = new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
    throw typeError;
  } else {
    const defaultResult = _typeof.default(defaultResult1);
    if (isValid.default(defaultResult)) {
      const uTCFullYear = defaultResult.getUTCFullYear();
      defaultResult1 = addLeadingZeros.default(defaultResult.getUTCDate(), 2);
      const defaultResult2 = addLeadingZeros.default(defaultResult.getUTCHours(), 2);
      const concat = "".concat;
      const defaultResult3 = addLeadingZeros.default(defaultResult.getUTCMinutes(), 2);
      const combined = "".concat(table[defaultResult.getUTCDay(defaultResult)], ", ");
      const combined1 = combined.concat(defaultResult1, " ");
      const combined2 = combined1.concat(table2[defaultResult.getUTCMonth(defaultResult)], " ");
      const combined3 = combined2.concat(uTCFullYear, " ");
      const combined4 = combined3.concat(defaultResult2, ":");
      const combined5 = combined4.concat(defaultResult3, ":");
      return combined5.concat(addLeadingZeros.default(defaultResult.getUTCSeconds(), 2), " GMT");
    } else {
      const _RangeError = RangeError;
      const rangeError = new RangeError("Invalid time value");
      throw rangeError;
    }
  }
};
export default exports.default;
