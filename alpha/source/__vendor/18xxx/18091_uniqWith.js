// Module ID: 18091
// Function ID: 18092
// Name: uniqWith
// Dependencies: [16528]

// Module 18091 (uniqWith)
import baseUniq from "baseUniq" /* 16528 */;


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
