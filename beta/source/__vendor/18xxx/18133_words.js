// Module ID: 18133
// Function ID: 18134
// Name: words
// Dependencies: [630, 18134, 18135, 18136]

// Module 18133 (words)
import _mod630 from "module_630" /* 630 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod630(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (tmp(18134)(str)) {
      tmpResult = tmp(18135);
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = tmp(18136)(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};
