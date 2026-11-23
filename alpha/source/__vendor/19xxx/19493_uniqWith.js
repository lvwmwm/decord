// Module ID: 19493
// Function ID: 19494
// Name: uniqWith
// Dependencies: [17304]

// Module 19493 (uniqWith)
import baseUniq from "baseUniq" /* 17304 */;


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
