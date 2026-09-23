// Module ID: 18200
// Function ID: 18201
// Name: words
// Dependencies: [626, 18201, 18202, 18203]

// Module 18200 (words)
import _mod626 from "module_626" /* 626 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (tmp(18201)(str)) {
      tmpResult = tmp(18202);
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = tmp(18203)(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};
