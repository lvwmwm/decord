// Module ID: 19792
// Function ID: 19793
// Name: words
// Dependencies: [625, 19793, 19794, 19795]

// Module 19792 (words)
import toString from "toString" /* 625 */;
import hasUnicodeWord from "hasUnicodeWord" /* 19793 */;


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
      tmp5 = tmp(19794)(str);
    } else {
      tmp5 = tmp(19795)(str);
    }
    tmp4 = tmp5;
  } else {
    tmp4 = str.match(tmp3) || [];
  }
  return tmp4;
};
