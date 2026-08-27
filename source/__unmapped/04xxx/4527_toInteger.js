// Module ID: 4527
// Function ID: 4528
// Name: toInteger
// Dependencies: [4528]

// Module 4527 (toInteger)
import toFinite from "toFinite" /* 4528 */;


export default function toInteger(arg0) {
  const tmp = toFinite(arg0);
  const result = tmp % 1;
  let num = 0;
  if (tmp == tmp) {
    let diff = tmp;
    if (result) {
      diff = tmp - result;
    }
    num = diff;
  }
  return num;
};
