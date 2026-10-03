// Module ID: 17833
// Function ID: 17834
// Name: words
// Dependencies: [637, 17834, 17835, 17836]

// Module 17833 (words)
import toString from "toString" /* 637 */;
import hasUnicodeWord from "hasUnicodeWord" /* 17834 */;


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
      tmp5 = tmp(17835)(str);
    } else {
      tmp5 = tmp(17836)(str);
    }
    tmp4 = tmp5;
  } else {
    tmp4 = str.match(tmp3) || [];
  }
  return tmp4;
};
