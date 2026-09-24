// Module ID: 18232
// Function ID: 18233
// Dependencies: [626, 18233, 18234, 18237]

// Module 18232
import _mod626 from "module_626" /* 626 */;
import _mod18233 from "module_18233" /* 18233 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod626(arg0);
    let tmp3;
    if (_mod18233(str)) {
      tmp3 = tmp(18234)(str);
    }
    if (tmp3) {
      let first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      let joined = tmp(18237)(tmp3, 1).join("");
      const obj = tmp(18237)(tmp3, 1);
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
};
