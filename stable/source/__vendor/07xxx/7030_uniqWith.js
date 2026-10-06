// Module ID: 7030
// Function ID: 7031
// Name: uniqWith
// Dependencies: [7031]

// Module 7030 (uniqWith)
import baseUniq from "baseUniq" /* 7031 */;


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
