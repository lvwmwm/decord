// Module ID: 7612
// Function ID: 7613
// Name: uniqWith
// Dependencies: [7613]

// Module 7612 (uniqWith)
import baseUniq from "baseUniq" /* 7613 */;


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
