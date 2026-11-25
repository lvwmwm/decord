// Module ID: 19647
// Function ID: 19648
// Name: uniqWith
// Dependencies: [17453]

// Module 19647 (uniqWith)
import baseUniq from "baseUniq" /* 17453 */;


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
