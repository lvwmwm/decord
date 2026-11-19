// Module ID: 19546
// Function ID: 19547
// Name: uniqWith
// Dependencies: [17351]

// Module 19546 (uniqWith)
import baseUniq from "baseUniq" /* 17351 */;


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
