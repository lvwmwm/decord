// Module ID: 7848
// Function ID: 7849
// Name: uniqWith
// Dependencies: [7849]

// Module 7848 (uniqWith)
import baseUniq from "baseUniq" /* 7849 */;


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
