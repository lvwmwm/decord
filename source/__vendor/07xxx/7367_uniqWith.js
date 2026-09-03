// Module ID: 7367
// Function ID: 7368
// Name: uniqWith
// Dependencies: [7368]

// Module 7367 (uniqWith)
import baseUniq from "baseUniq" /* 7368 */;


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
