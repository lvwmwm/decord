// Module ID: 18140
// Function ID: 18141
// Dependencies: [626, 18141, 18142, 18145]

// Module 18140
import _mod626 from "module_626" /* 626 */;
import _mod18141 from "module_18141" /* 18141 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod626(arg0);
    let tmp3;
    if (_mod18141(str)) {
      tmp3 = tmp(18142)(str);
    }
    if (tmp3) {
      let first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      let joined = tmp(18145)(tmp3, 1).join("");
      const obj = tmp(18145)(tmp3, 1);
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
};
