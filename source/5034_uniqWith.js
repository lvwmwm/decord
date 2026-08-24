// Module ID: 5034
// Function ID: 5035
// Name: uniqWith
// Dependencies: [5035]

// Module 5034 (uniqWith)
import baseUniq from "baseUniq" /* 5035 */;


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
