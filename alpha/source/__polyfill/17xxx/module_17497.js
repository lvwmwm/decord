// Module ID: 17497
// Function ID: 17498
// Dependencies: [626, 17498, 17499, 17502]

// Module 17497
import _mod626 from "module_626" /* 626 */;
import _mod17498 from "module_17498" /* 17498 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod626(arg0);
    let tmp3;
    if (_mod17498(str)) {
      tmp3 = tmp(17499)(str);
    }
    if (tmp3) {
      let first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      let joined = tmp(17502)(tmp3, 1).join("");
      const obj = tmp(17502)(tmp3, 1);
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
};
