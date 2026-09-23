// Module ID: 18209
// Function ID: 18210
// Dependencies: [626, 18210, 18211, 18214]

// Module 18209
import _mod626 from "module_626" /* 626 */;
import _mod18210 from "module_18210" /* 18210 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod626(arg0);
    let tmp3;
    if (_mod18210(str)) {
      tmp3 = tmp(18211)(str);
    }
    if (tmp3) {
      let first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      let joined = tmp(18214)(tmp3, 1).join("");
      const obj = tmp(18214)(tmp3, 1);
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
};
