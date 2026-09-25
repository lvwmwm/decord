// Module ID: 17454
// Function ID: 17455
// Name: words
// Dependencies: [626, 17455, 17456, 17457]

// Module 17454 (words)
import _mod626 from "module_626" /* 626 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (tmp(17455)(str)) {
      tmpResult = tmp(17456);
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = tmp(17457)(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};
