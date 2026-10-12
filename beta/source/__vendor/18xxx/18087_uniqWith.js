// Module ID: 18087
// Function ID: 18088
// Name: uniqWith
// Dependencies: [16221]

// Module 18087 (uniqWith)
import baseUniq from "baseUniq" /* 16221 */;


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
