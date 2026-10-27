// Module ID: 18799
// Function ID: 18800
// Name: uniqWith
// Dependencies: [17213]

// Module 18799 (uniqWith)
import baseUniq from "baseUniq" /* 17213 */;


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
