// Module ID: 19764
// Function ID: 19765
// Name: uniqWith
// Dependencies: [18130]

// Module 19764 (uniqWith)
import baseUniq from "baseUniq" /* 18130 */;


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
