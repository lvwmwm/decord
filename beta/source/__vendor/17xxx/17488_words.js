// Module ID: 17488
// Function ID: 17489
// Name: words
// Dependencies: [626, 17489, 17490, 17491]

// Module 17488 (words)
import toString from "toString" /* 626 */;
import hasUnicodeWord from "hasUnicodeWord" /* 17489 */;


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
      tmp5 = tmp(17490)(str);
    } else {
      tmp5 = tmp(17491)(str);
    }
    tmp4 = tmp5;
  } else {
    tmp4 = str.match(tmp3) || [];
  }
  return tmp4;
};
