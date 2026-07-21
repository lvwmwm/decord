// Module ID: 3585
// Function ID: 27761
// Name: lightFormat
// Dependencies: []
// Exports: default

// Module 3585 (lightFormat)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = _interopRequireDefault(require(dependencyMap[3]));
let closure_4 = _interopRequireDefault(require(dependencyMap[4]));
let closure_5 = _interopRequireDefault(require(dependencyMap[5]));
let closure_6 = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
let closure_7 = /^'([^]*?)'?$/;
let closure_8 = /''/g;
let closure_9 = /[a-zA-Z]/;

export default function lightFormat(defaultResult1, str) {
  closure_5.default(2, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  if (closure_3.default(defaultResult1)) {
    closure_0 = closure_4.default(defaultResult1, closure_2.default(defaultResult1));
    const match = str.match(closure_6);
    let str3 = "";
    if (match) {
      const mapped = match.map((arg0) => {
        let str = arg0;
        if ("''" === arg0) {
          return "'";
        } else if ("'" === str[0]) {
          const match = str.match(closure_7);
          if (match) {
            str = match[1].replace(closure_8, "'");
            const str4 = match[1];
          }
          return str;
        } else if (mod.default[str6]) {
          return tmp2(closure_0, str);
        } else if (str6.match(closure_9)) {
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
    const _RangeError = RangeError;
    const rangeError = new RangeError("Invalid time value");
    throw rangeError;
  }
};
export default exports.default;
