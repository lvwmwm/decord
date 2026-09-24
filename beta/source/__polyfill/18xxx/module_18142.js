// Module ID: 18142
// Function ID: 18143
// Dependencies: [630, 18143, 18144, 18147]

// Module 18142
import _mod630 from "module_630" /* 630 */;
import _mod18143 from "module_18143" /* 18143 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod630(arg0);
    let tmp3;
    if (_mod18143(str)) {
      tmp3 = tmp(18144)(str);
    }
    if (tmp3) {
      let first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      let joined = tmp(18147)(tmp3, 1).join("");
      const obj = tmp(18147)(tmp3, 1);
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
};
