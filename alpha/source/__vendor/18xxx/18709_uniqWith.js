// Module ID: 18709
// Function ID: 18710
// Name: uniqWith
// Dependencies: [17132]

// Module 18709 (uniqWith)
import baseUniq from "baseUniq" /* 17132 */;


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
