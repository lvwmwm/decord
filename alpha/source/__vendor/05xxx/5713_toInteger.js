// Module ID: 5713
// Function ID: 5714
// Name: toInteger
// Dependencies: [5714]

// Module 5713 (toInteger)
import toFinite from "toFinite" /* 5714 */;


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
