// Module ID: 18133
// Function ID: 18134
// Dependencies: [626, 18134, 18135, 18138]

// Module 18133
import _mod626 from "module_626" /* 626 */;
import _mod18134 from "module_18134" /* 18134 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod626(arg0);
    let tmp3;
    if (_mod18134(str)) {
      tmp3 = tmp(18135)(str);
    }
    if (tmp3) {
      let first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      let joined = tmp(18138)(tmp3, 1).join("");
      const obj = tmp(18138)(tmp3, 1);
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
};
