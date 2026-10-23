// Module ID: 18753
// Function ID: 18754
// Name: uniqWith
// Dependencies: [17176]

// Module 18753 (uniqWith)
import baseUniq from "baseUniq" /* 17176 */;


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
