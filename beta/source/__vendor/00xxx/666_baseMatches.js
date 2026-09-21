// Module ID: 666
// Function ID: 667
// Name: baseMatches
// Dependencies: [667, 592, 668]

// Module 666 (baseMatches)
import baseIsMatch from "baseIsMatch" /* 668 */;

const require = globalThis.__r;


export default function baseMatches(arg0) {
  _require = arg0;
  arr = require("module_667")(arg0);
  if (1 == arr.length) {
    if (arr[0][2]) {
      let fn = require("matchesStrictComparable")(arr[0][0], arr[0][1]);
    }
    return fn;
  }
  fn = (arg0) => {
    let tmp2 = arg0 === closure_0;
    if (!tmp2) {
      tmp2 = baseIsMatch(arg0, tmp, arr);
    }
    return tmp2;
  };
};
