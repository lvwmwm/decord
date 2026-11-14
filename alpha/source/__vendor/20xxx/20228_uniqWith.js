// Module ID: 20228
// Function ID: 20229
// Name: uniqWith
// Dependencies: [18502]

// Module 20228 (uniqWith)
import baseUniq from "baseUniq" /* 18502 */;


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
