// Module ID: 19898
// Function ID: 19899
// Name: uniqWith
// Dependencies: [18220]

// Module 19898 (uniqWith)
import baseUniq from "baseUniq" /* 18220 */;


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
