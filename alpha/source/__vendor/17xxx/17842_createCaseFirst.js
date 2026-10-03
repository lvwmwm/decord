// Module ID: 17842
// Function ID: 17843
// Name: createCaseFirst
// Dependencies: [637, 17843, 17844, 17847]

// Module 17842 (createCaseFirst)
import toString from "toString" /* 637 */;
import hasUnicode from "hasUnicode" /* 17843 */;
import castSlice from "castSlice" /* 17847 */;


export default function createCaseFirst(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let first;
    let joined;
    const str = toString(arg0);
    let tmp3;
    if (hasUnicode(str)) {
      tmp3 = tmp(17844)(str);
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
