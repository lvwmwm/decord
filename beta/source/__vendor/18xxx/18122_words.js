// Module ID: 18122
// Function ID: 18123
// Name: words
// Dependencies: [630, 18123, 18124, 18125]

// Module 18122 (words)
import _mod630 from "module_630" /* 630 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod630(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (tmp(18123)(str)) {
      tmpResult = tmp(18124);
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = tmp(18125)(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};
