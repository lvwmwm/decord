// Module ID: 7304
// Function ID: 7305
// Name: uniqWith
// Dependencies: [7305]

// Module 7304 (uniqWith)
import baseUniq from "baseUniq" /* 7305 */;


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
