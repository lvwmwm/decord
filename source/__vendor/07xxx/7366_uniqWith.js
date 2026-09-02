// Module ID: 7366
// Function ID: 7367
// Name: uniqWith
// Dependencies: [7367]

// Module 7366 (uniqWith)
import baseUniq from "baseUniq" /* 7367 */;


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
