// Module ID: 18763
// Function ID: 18764
// Name: words
// Dependencies: [637, 18764, 18765, 18766]

// Module 18763 (words)
import toString from "toString" /* 637 */;
import hasUnicodeWord from "hasUnicodeWord" /* 18764 */;


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
      tmp5 = tmp(18765)(str);
    } else {
      tmp5 = tmp(18766)(str);
    }
    tmp4 = tmp5;
  } else {
    tmp4 = str.match(tmp3) || [];
  }
  return tmp4;
};
