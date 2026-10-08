// Module ID: 18190
// Function ID: 18191
// Name: words
// Dependencies: [637, 18191, 18192, 18193]

// Module 18190 (words)
import toString from "toString" /* 637 */;
import hasUnicodeWord from "hasUnicodeWord" /* 18191 */;


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
      tmp5 = tmp(18192)(str);
    } else {
      tmp5 = tmp(18193)(str);
    }
    tmp4 = tmp5;
  } else {
    tmp4 = str.match(tmp3) || [];
  }
  return tmp4;
};
