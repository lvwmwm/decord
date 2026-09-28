// Module ID: 17488
// Function ID: 17489
// Name: words
// Dependencies: [626, 17489, 17490, 17491]

// Module 17488 (words)
import _mod626 from "module_626" /* 626 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (tmp(17489)(str)) {
      tmpResult = tmp(17490);
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = tmp(17491)(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};
