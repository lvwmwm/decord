// Module ID: 17686
// Function ID: 17687
// Dependencies: [626, 17687, 17688, 17691]

// Module 17686
import _mod626 from "module_626" /* 626 */;
import _mod17687 from "module_17687" /* 17687 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod626(arg0);
    let tmp3;
    if (_mod17687(str)) {
      tmp3 = tmp(17688)(str);
    }
    if (tmp3) {
      let first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      let joined = tmp(17691)(tmp3, 1).join("");
      const obj = tmp(17691)(tmp3, 1);
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
};
