// Module ID: 19923
// Function ID: 19924
// Name: words
// Dependencies: [625, 19924, 19925, 19926]

// Module 19923 (words)
import toString from "toString" /* 625 */;
import hasUnicodeWord from "hasUnicodeWord" /* 19924 */;


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
      tmp5 = tmp(19925)(str);
    } else {
      tmp5 = tmp(19926)(str);
    }
    tmp4 = tmp5;
  } else {
    tmp4 = str.match(tmp3) || [];
  }
  return tmp4;
};
