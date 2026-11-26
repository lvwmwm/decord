// Module ID: 20236
// Function ID: 20237
// Name: uniqWith
// Dependencies: [18506]

// Module 20236 (uniqWith)
import baseUniq from "baseUniq" /* 18506 */;


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
