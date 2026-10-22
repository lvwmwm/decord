// Module ID: 19109
// Function ID: 19110
// Name: words
// Dependencies: [637, 19110, 19111, 19112]

// Module 19109 (words)
import toString from "toString" /* 637 */;
import hasUnicodeWord from "hasUnicodeWord" /* 19110 */;


export default function words(arg0, arg1, arg2) {
  let tmp4;
  const str = toString(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    let tmp5;
    if (hasUnicodeWord(str)) {
      tmp5 = tmp(19111)(str);
    } else {
      tmp5 = tmp(19112)(str);
    }
    tmp4 = tmp5;
  } else {
    tmp4 = str.match(tmp3) || [];
  }
  return tmp4;
};
