// Module ID: 18223
// Function ID: 18224
// Name: words
// Dependencies: [626, 18224, 18225, 18226]

// Module 18223 (words)
import _mod626 from "module_626" /* 626 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (tmp(18224)(str)) {
      tmpResult = tmp(18225);
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = tmp(18226)(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};
