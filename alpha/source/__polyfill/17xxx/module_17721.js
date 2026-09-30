// Module ID: 17721
// Function ID: 17722
// Dependencies: [626, 17722, 17723, 17726]

// Module 17721
import _mod626 from "module_626" /* 626 */;
import _mod17722 from "module_17722" /* 17722 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod626(arg0);
    let tmp3;
    if (_mod17722(str)) {
      tmp3 = tmp(17723)(str);
    }
    if (tmp3) {
      let first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      let joined = tmp(17726)(tmp3, 1).join("");
      const obj = tmp(17726)(tmp3, 1);
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
};
