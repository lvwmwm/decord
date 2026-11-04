// Module ID: 20136
// Function ID: 20137
// Name: words
// Dependencies: [625, 20137, 20138, 20139]

// Module 20136 (words)
import toString from "toString" /* 625 */;
import hasUnicodeWord from "hasUnicodeWord" /* 20137 */;


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
      tmp5 = tmp(20138)(str);
    } else {
      tmp5 = tmp(20139)(str);
    }
    tmp4 = tmp5;
  } else {
    tmp4 = str.match(tmp3) || [];
  }
  return tmp4;
};
