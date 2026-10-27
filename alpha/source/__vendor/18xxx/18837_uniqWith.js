// Module ID: 18837
// Function ID: 18838
// Name: uniqWith
// Dependencies: [17254]

// Module 18837 (uniqWith)
import baseUniq from "baseUniq" /* 17254 */;


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
