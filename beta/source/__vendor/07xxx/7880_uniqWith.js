// Module ID: 7880
// Function ID: 7881
// Name: uniqWith
// Dependencies: [7881]

// Module 7880 (uniqWith)
import baseUniq from "baseUniq" /* 7881 */;


export default function uniqWith(arg0, fn) {
  if (typeof fn === "function") {
    const tmp = fn;
  }
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, undefined, tmp);
    }
    return [];
  }
};
