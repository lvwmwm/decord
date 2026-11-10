// Module ID: 19881
// Function ID: 19882
// Name: uniqWith
// Dependencies: [18213]

// Module 19881 (uniqWith)
import baseUniq from "baseUniq" /* 18213 */;


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
