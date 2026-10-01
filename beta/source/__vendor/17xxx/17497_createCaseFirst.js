// Module ID: 17497
// Function ID: 17498
// Name: createCaseFirst
// Dependencies: [626, 17498, 17499, 17502]

// Module 17497 (createCaseFirst)
import toString from "toString" /* 626 */;
import hasUnicode from "hasUnicode" /* 17498 */;
import castSlice from "castSlice" /* 17502 */;


export default function createCaseFirst(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let first;
    let joined;
    const str = toString(arg0);
    let tmp3;
    if (hasUnicode(str)) {
      tmp3 = tmp(17499)(str);
    }
    if (tmp3) {
      first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      const obj = castSlice(tmp3, 1);
      joined = obj.join("");
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
};
