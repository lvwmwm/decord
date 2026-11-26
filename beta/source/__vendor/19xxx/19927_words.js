// Module ID: 19927
// Function ID: 19928
// Name: words
// Dependencies: [625, 19928, 19929, 19930]

// Module 19927 (words)
import toString from "toString" /* 625 */;
import hasUnicodeWord from "hasUnicodeWord" /* 19928 */;


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
      tmp5 = tmp(19929)(str);
    } else {
      tmp5 = tmp(19930)(str);
    }
    tmp4 = tmp5;
  } else {
    tmp4 = str.match(tmp3) || [];
  }
  return tmp4;
};
