// Module ID: 7545
// Function ID: 7546
// Name: uniqWith
// Dependencies: [7546]

// Module 7545 (uniqWith)
import baseUniq from "baseUniq" /* 7546 */;


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
