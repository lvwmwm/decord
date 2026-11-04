// Module ID: 19729
// Function ID: 19730
// Name: uniqWith
// Dependencies: [18102]

// Module 19729 (uniqWith)
import baseUniq from "baseUniq" /* 18102 */;


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
