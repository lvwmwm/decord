// Module ID: 17499
// Function ID: 17500
// Name: createCaseFirst
// Dependencies: [638, 17500, 17501, 17504]

// Module 17499 (createCaseFirst)
import toString from "toString" /* 638 */;
import hasUnicode from "hasUnicode" /* 17500 */;
import castSlice from "castSlice" /* 17504 */;


export default function createCaseFirst(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let first;
    let joined;
    const str = toString(arg0);
    let tmp3;
    if (hasUnicode(str)) {
      tmp3 = tmp(17501)(str);
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
