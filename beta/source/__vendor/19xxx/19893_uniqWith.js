// Module ID: 19893
// Function ID: 19894
// Name: uniqWith
// Dependencies: [18219]

// Module 19893 (uniqWith)
import baseUniq from "baseUniq" /* 18219 */;


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
