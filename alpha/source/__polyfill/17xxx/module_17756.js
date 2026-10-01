// Module ID: 17756
// Function ID: 17757
// Dependencies: [626, 17757, 17758, 17761]

// Module 17756
import _mod626 from "module_626" /* 626 */;
import _mod17757 from "module_17757" /* 17757 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod626(arg0);
    let tmp3;
    if (_mod17757(str)) {
      tmp3 = tmp(17758)(str);
    }
    if (tmp3) {
      let first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      let joined = tmp(17761)(tmp3, 1).join("");
      const obj = tmp(17761)(tmp3, 1);
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
};
