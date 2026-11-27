// Module ID: 19726
// Function ID: 19727
// Name: uniqWith
// Dependencies: [17517]

// Module 19726 (uniqWith)
import baseUniq from "baseUniq" /* 17517 */;


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
