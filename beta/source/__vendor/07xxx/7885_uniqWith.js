// Module ID: 7885
// Function ID: 7886
// Name: uniqWith
// Dependencies: [7886]

// Module 7885 (uniqWith)
import baseUniq from "baseUniq" /* 7886 */;


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
