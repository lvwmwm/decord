// Module ID: 3587
// Function ID: 27767
// Name: lightFormat
// Dependencies: [3209, 3453, 3372, 3391, 3442, 3210]
// Exports: default

// Module 3587 (lightFormat)
import _typeof from "_typeof";
import closure_1 from "M";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";
import isValid from "isValid";
import subMilliseconds from "subMilliseconds";
import requiredArgs from "requiredArgs";

const re6 = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
const re7 = /^'([^]*?)'?$/;
const re8 = /''/g;
const re9 = /[a-zA-Z]/;

export default function lightFormat(defaultResult1, str) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  if (isValid.default(defaultResult1)) {
    _typeof = subMilliseconds.default(defaultResult1, getTimezoneOffsetInMilliseconds.default(defaultResult1));
    let match = str.match(closure_6);
    let str3 = "";
    if (match) {
      const mapped = match.map((arg0) => {
        let str = arg0;
        if ("''" === arg0) {
          return "'";
        } else if ("'" === str[0]) {
          const match = str.match(outer1_7);
          if (match) {
            str = match[1].replace(outer1_8, "'");
            const str4 = match[1];
          }
          return str;
        } else if (outer1_1.default[str6]) {
          return tmp2(closure_0, str);
        } else if (str6.match(outer1_9)) {
          const _RangeError = RangeError;
          const rangeError = new RangeError("Format string contains an unescaped latin alphabet character `" + str6 + "`");
          throw rangeError;
        } else {
          return str;
        }
      });
      str3 = mapped.join("");
    }
    return str3;
  } else {
    let _RangeError = RangeError;
    let rangeError = new RangeError("Invalid time value");
    throw rangeError;
  }
};
export default exports.default;
