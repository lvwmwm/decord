// Module ID: 7218
// Function ID: 7219
// Name: uniqWith
// Dependencies: [7219]

// Module 7218 (uniqWith)
import baseUniq from "baseUniq" /* 7219 */;


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
