// Module ID: 19452
// Function ID: 19453
// Name: uniqWith
// Dependencies: [17851]

// Module 19452 (uniqWith)
import baseUniq from "baseUniq" /* 17851 */;


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
