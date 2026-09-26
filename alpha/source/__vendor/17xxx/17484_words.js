// Module ID: 17484
// Function ID: 17485
// Name: words
// Dependencies: [626, 17485, 17486, 17487]

// Module 17484 (words)
import _mod626 from "module_626" /* 626 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (tmp(17485)(str)) {
      tmpResult = tmp(17486);
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = tmp(17487)(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};
