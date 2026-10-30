// Module ID: 19800
// Function ID: 19801
// Name: createCaseFirst
// Dependencies: [625, 19801, 19802, 19805]

// Module 19800 (createCaseFirst)
import toString from "toString" /* 625 */;
import hasUnicode from "hasUnicode" /* 19801 */;
import castSlice from "castSlice" /* 19805 */;


export default function createCaseFirst(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let first;
    let joined;
    const str = toString(arg0);
    let tmp3;
    if (hasUnicode(str)) {
      tmp3 = tmp(19802)(str);
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
