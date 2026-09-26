// Module ID: 17493
// Function ID: 17494
// Dependencies: [626, 17494, 17495, 17498]

// Module 17493
import _mod626 from "module_626" /* 626 */;
import _mod17494 from "module_17494" /* 17494 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod626(arg0);
    let tmp3;
    if (_mod17494(str)) {
      tmp3 = tmp(17495)(str);
    }
    if (tmp3) {
      let first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      let joined = tmp(17498)(tmp3, 1).join("");
      const obj = tmp(17498)(tmp3, 1);
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
};
