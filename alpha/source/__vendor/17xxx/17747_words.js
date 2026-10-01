// Module ID: 17747
// Function ID: 17748
// Name: words
// Dependencies: [626, 17748, 17749, 17750]

// Module 17747 (words)
import _mod626 from "module_626" /* 626 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (tmp(17748)(str)) {
      tmpResult = tmp(17749);
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = tmp(17750)(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};
