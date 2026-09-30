// Module ID: 17712
// Function ID: 17713
// Name: words
// Dependencies: [626, 17713, 17714, 17715]

// Module 17712 (words)
import _mod626 from "module_626" /* 626 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (tmp(17713)(str)) {
      tmpResult = tmp(17714);
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = tmp(17715)(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};
