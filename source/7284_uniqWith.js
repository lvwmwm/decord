// Module ID: 7284
// Function ID: 7285
// Name: uniqWith
// Dependencies: [7285]

// Module 7284 (uniqWith)
import baseUniq from "baseUniq" /* 7285 */;


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
