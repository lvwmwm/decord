// Module ID: 18361
// Function ID: 18362
// Name: createCaseFirst
// Dependencies: [637, 18362, 18363, 18366]

// Module 18361 (createCaseFirst)
import toString from "toString" /* 637 */;
import hasUnicode from "hasUnicode" /* 18362 */;
import castSlice from "castSlice" /* 18366 */;


export default function createCaseFirst(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let first;
    let joined;
    const str = toString(arg0);
    let tmp3;
    if (hasUnicode(str)) {
      tmp3 = tmp(18363)(str);
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
