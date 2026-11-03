// Module ID: 19610
// Function ID: 19611
// Name: uniqWith
// Dependencies: [17994]

// Module 19610 (uniqWith)
import baseUniq from "baseUniq" /* 17994 */;


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
