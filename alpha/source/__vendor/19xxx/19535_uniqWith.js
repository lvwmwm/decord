// Module ID: 19535
// Function ID: 19536
// Name: uniqWith
// Dependencies: [17342]

// Module 19535 (uniqWith)
import baseUniq from "baseUniq" /* 17342 */;


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
