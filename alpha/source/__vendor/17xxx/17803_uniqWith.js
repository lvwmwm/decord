// Module ID: 17803
// Function ID: 17804
// Name: uniqWith
// Dependencies: [16014]

// Module 17803 (uniqWith)
import baseUniq from "baseUniq" /* 16014 */;


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
