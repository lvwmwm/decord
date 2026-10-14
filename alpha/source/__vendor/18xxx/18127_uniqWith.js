// Module ID: 18127
// Function ID: 18128
// Name: uniqWith
// Dependencies: [16567]

// Module 18127 (uniqWith)
import baseUniq from "baseUniq" /* 16567 */;


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
