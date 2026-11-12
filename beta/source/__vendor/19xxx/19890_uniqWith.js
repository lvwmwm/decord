// Module ID: 19890
// Function ID: 19891
// Name: uniqWith
// Dependencies: [18222]

// Module 19890 (uniqWith)
import baseUniq from "baseUniq" /* 18222 */;


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
