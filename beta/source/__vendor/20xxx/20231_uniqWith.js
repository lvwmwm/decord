// Module ID: 20231
// Function ID: 20232
// Name: uniqWith
// Dependencies: [18504]

// Module 20231 (uniqWith)
import baseUniq from "baseUniq" /* 18504 */;


export default function uniqWith(arg0, fn) {
  let tmp;
  if (typeof fn === "function") {
    tmp = fn;
  }
  const tmp2 = arg0;
  if (tmp2) {
    if (arg0.length) {
      baseUniq(arg0, undefined, tmp);
    }
    return [];
  }
};
