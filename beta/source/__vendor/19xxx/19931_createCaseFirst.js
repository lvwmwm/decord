// Module ID: 19931
// Function ID: 19932
// Name: createCaseFirst
// Dependencies: [625, 19932, 19933, 19936]

// Module 19931 (createCaseFirst)
import toString from "toString" /* 625 */;
import hasUnicode from "hasUnicode" /* 19932 */;
import castSlice from "castSlice" /* 19936 */;


export default function createCaseFirst(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let first;
    let joined;
    const str = toString(arg0);
    let tmp3;
    if (hasUnicode(str)) {
      tmp3 = tmp(19933)(str);
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
