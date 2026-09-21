// Module ID: 18131
// Function ID: 18132
// Dependencies: [630, 18132, 18133, 18136]

// Module 18131
import _mod630 from "module_630" /* 630 */;
import _mod18132 from "module_18132" /* 18132 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod630(arg0);
    let tmp3;
    if (_mod18132(str)) {
      tmp3 = tmp(18133)(str);
    }
    if (tmp3) {
      let first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      let joined = tmp(18136)(tmp3, 1).join("");
      const obj = tmp(18136)(tmp3, 1);
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
};
