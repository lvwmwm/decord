// Module ID: 7026
// Function ID: 7027
// Name: uniqWith
// Dependencies: [7027]

// Module 7026 (uniqWith)
import baseUniq from "baseUniq" /* 7027 */;


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
