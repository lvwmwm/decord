// Module ID: 5777
// Function ID: 5778
// Name: toInteger
// Dependencies: [5778]

// Module 5777 (toInteger)
import toFinite from "toFinite" /* 5778 */;


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
