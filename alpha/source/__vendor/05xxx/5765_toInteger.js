// Module ID: 5765
// Function ID: 5766
// Name: toInteger
// Dependencies: [5766]

// Module 5765 (toInteger)
import toFinite from "toFinite" /* 5766 */;


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
