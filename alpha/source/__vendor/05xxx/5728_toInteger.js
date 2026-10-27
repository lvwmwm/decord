// Module ID: 5728
// Function ID: 5729
// Name: toInteger
// Dependencies: [5729]

// Module 5728 (toInteger)
import toFinite from "toFinite" /* 5729 */;


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
