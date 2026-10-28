// Module ID: 19090
// Function ID: 19091
// Name: uniqWith
// Dependencies: [17484]

// Module 19090 (uniqWith)
import baseUniq from "baseUniq" /* 17484 */;


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
