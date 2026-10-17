// Module ID: 18880
// Function ID: 18881
// Name: words
// Dependencies: [637, 18881, 18882, 18883]

// Module 18880 (words)
import toString from "toString" /* 637 */;
import hasUnicodeWord from "hasUnicodeWord" /* 18881 */;


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
      tmp5 = tmp(18882)(str);
    } else {
      tmp5 = tmp(18883)(str);
    }
    tmp4 = tmp5;
  } else {
    tmp4 = str.match(tmp3) || [];
  }
  return tmp4;
};
