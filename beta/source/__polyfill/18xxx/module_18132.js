// Module ID: 18132
// Function ID: 18133
// Dependencies: [630, 18133, 18134, 18137]

// Module 18132
import _mod630 from "module_630" /* 630 */;
import _mod18133 from "module_18133" /* 18133 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod630(arg0);
    let tmp3;
    if (_mod18133(str)) {
      tmp3 = tmp(18134)(str);
    }
    if (tmp3) {
      let first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      let joined = tmp(18137)(tmp3, 1).join("");
      const obj = tmp(18137)(tmp3, 1);
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
};
