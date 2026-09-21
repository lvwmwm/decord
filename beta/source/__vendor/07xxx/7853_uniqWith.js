// Module ID: 7853
// Function ID: 7854
// Name: uniqWith
// Dependencies: [7854]

// Module 7853 (uniqWith)
import baseUniq from "baseUniq" /* 7854 */;


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
