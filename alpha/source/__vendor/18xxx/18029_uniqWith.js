// Module ID: 18029
// Function ID: 18030
// Name: uniqWith
// Dependencies: [16198]

// Module 18029 (uniqWith)
import baseUniq from "baseUniq" /* 16198 */;


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
