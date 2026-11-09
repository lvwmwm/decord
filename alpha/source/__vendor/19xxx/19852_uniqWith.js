// Module ID: 19852
// Function ID: 19853
// Name: uniqWith
// Dependencies: [18184]

// Module 19852 (uniqWith)
import baseUniq from "baseUniq" /* 18184 */;


export default function uniqWith(arg0, fn) {
  let tmp;
  if (typeof fn === "function") {
    tmp = fn;
  }
  const tmp2 = arg0;
  if (tmp2) {
    if (arg0.length) {
      baseUniq(arg0, undefined, tmp);
    }
    return [];
  }
};
