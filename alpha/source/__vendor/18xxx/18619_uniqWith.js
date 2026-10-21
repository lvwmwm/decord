// Module ID: 18619
// Function ID: 18620
// Name: uniqWith
// Dependencies: [17041]

// Module 18619 (uniqWith)
import baseUniq from "baseUniq" /* 17041 */;


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
