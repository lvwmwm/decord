// Module ID: 18480
// Function ID: 18481
// Name: uniqWith
// Dependencies: [16913]

// Module 18480 (uniqWith)
import baseUniq from "baseUniq" /* 16913 */;


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
