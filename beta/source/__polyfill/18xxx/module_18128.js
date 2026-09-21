// Module ID: 18128
// Function ID: 18129
// Dependencies: [626, 18129, 18130, 18133]

// Module 18128
import _mod626 from "module_626" /* 626 */;
import _mod18129 from "module_18129" /* 18129 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod626(arg0);
    let tmp3;
    if (_mod18129(str)) {
      tmp3 = tmp(18130)(str);
    }
    if (tmp3) {
      let first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      let joined = tmp(18133)(tmp3, 1).join("");
      const obj = tmp(18133)(tmp3, 1);
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
};
