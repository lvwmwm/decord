// Module ID: 18131
// Function ID: 18132
// Name: words
// Dependencies: [626, 18132, 18133, 18134]

// Module 18131 (words)
import _mod626 from "module_626" /* 626 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (tmp(18132)(str)) {
      tmpResult = tmp(18133);
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = tmp(18134)(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};
