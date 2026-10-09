// Module ID: 17957
// Function ID: 17958
// Name: uniqWith
// Dependencies: [16130]

// Module 17957 (uniqWith)
import baseUniq from "baseUniq" /* 16130 */;


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
