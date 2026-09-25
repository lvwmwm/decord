// Module ID: 17463
// Function ID: 17464
// Dependencies: [626, 17464, 17465, 17468]

// Module 17463
import _mod626 from "module_626" /* 626 */;
import _mod17464 from "module_17464" /* 17464 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod626(arg0);
    let tmp3;
    if (_mod17464(str)) {
      tmp3 = tmp(17465)(str);
    }
    if (tmp3) {
      let first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      let joined = tmp(17468)(tmp3, 1).join("");
      const obj = tmp(17468)(tmp3, 1);
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
};
