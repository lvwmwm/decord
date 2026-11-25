// Module ID: 20062
// Function ID: 20063
// Name: words
// Dependencies: [625, 20063, 20064, 20065]

// Module 20062 (words)
import toString from "toString" /* 625 */;
import hasUnicodeWord from "hasUnicodeWord" /* 20063 */;


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
      tmp5 = tmp(20064)(str);
    } else {
      tmp5 = tmp(20065)(str);
    }
    tmp4 = tmp5;
  } else {
    tmp4 = str.match(tmp3) || [];
  }
  return tmp4;
};
