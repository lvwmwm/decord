// Module ID: 17521
// Function ID: 17522
// Name: uniqWith
// Dependencies: [15756]

// Module 17521 (uniqWith)
import baseUniq from "baseUniq" /* 15756 */;


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
