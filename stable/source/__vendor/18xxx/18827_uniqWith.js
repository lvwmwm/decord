// Module ID: 18827
// Function ID: 18828
// Name: uniqWith
// Dependencies: [17247]

// Module 18827 (uniqWith)
import baseUniq from "baseUniq" /* 17247 */;


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
