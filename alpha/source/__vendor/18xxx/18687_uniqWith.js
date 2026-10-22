// Module ID: 18687
// Function ID: 18688
// Name: uniqWith
// Dependencies: [17110]

// Module 18687 (uniqWith)
import baseUniq from "baseUniq" /* 17110 */;


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
