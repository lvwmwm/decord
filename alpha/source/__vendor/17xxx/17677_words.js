// Module ID: 17677
// Function ID: 17678
// Name: words
// Dependencies: [626, 17678, 17679, 17680]

// Module 17677 (words)
import _mod626 from "module_626" /* 626 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (tmp(17678)(str)) {
      tmpResult = tmp(17679);
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = tmp(17680)(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};
