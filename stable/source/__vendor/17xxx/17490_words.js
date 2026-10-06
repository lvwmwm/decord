// Module ID: 17490
// Function ID: 17491
// Name: words
// Dependencies: [638, 17491, 17492, 17493]

// Module 17490 (words)
import toString from "toString" /* 638 */;
import hasUnicodeWord from "hasUnicodeWord" /* 17491 */;


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
      tmp5 = tmp(17492)(str);
    } else {
      tmp5 = tmp(17493)(str);
    }
    tmp4 = tmp5;
  } else {
    tmp4 = str.match(tmp3) || [];
  }
  return tmp4;
};
