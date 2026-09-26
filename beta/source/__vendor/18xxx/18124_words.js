// Module ID: 18124
// Function ID: 18125
// Name: words
// Dependencies: [626, 18125, 18126, 18127]

// Module 18124 (words)
import _mod626 from "module_626" /* 626 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (tmp(18125)(str)) {
      tmpResult = tmp(18126);
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = tmp(18127)(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};
