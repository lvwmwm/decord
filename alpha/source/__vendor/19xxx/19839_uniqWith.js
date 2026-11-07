// Module ID: 19839
// Function ID: 19840
// Name: uniqWith
// Dependencies: [18171]

// Module 19839 (uniqWith)
import baseUniq from "baseUniq" /* 18171 */;


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
