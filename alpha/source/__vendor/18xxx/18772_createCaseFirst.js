// Module ID: 18772
// Function ID: 18773
// Name: createCaseFirst
// Dependencies: [637, 18773, 18774, 18777]

// Module 18772 (createCaseFirst)
import toString from "toString" /* 637 */;
import hasUnicode from "hasUnicode" /* 18773 */;
import castSlice from "castSlice" /* 18777 */;


export default function createCaseFirst(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let first;
    let joined;
    const str = toString(arg0);
    let tmp3;
    if (hasUnicode(str)) {
      tmp3 = tmp(18774)(str);
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
