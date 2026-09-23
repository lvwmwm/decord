// Module ID: 7934
// Function ID: 7935
// Name: uniqWith
// Dependencies: [7935]

// Module 7934 (uniqWith)
import baseUniq from "baseUniq" /* 7935 */;


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
