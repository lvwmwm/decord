// Module ID: 18119
// Function ID: 18120
// Name: words
// Dependencies: [626, 18120, 18121, 18122]

// Module 18119 (words)
import _mod626 from "module_626" /* 626 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (tmp(18120)(str)) {
      tmpResult = tmp(18121);
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = tmp(18122)(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};
