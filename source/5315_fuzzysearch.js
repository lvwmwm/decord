// Module ID: 5315
// Function ID: 45171
// Name: fuzzysearch
// Dependencies: []

// Module 5315 (fuzzysearch)

export default function fuzzysearch(arg0, str) {
  if (arg0.length > str.length) {
    return false;
  } else if (length2 === length) {
    return arg0 === str;
  } else {
    let num = 0;
    let num2 = 0;
    if (0 < length2) {
      while (num < length) {
        let tmp3 = +num;
        let sum = tmp3 + 1;
        while (str.charCodeAt(tmp3) !== tmp) {
          num = sum;
          if (sum < length) {
            continue;
          } else {
            break label0;
          }
          let flag = false;
          return false;
        }
        num2 = num2 + 1;
        num = sum;
      }
    }
    return true;
  }
};
