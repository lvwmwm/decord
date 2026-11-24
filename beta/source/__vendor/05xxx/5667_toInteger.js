// Module ID: 5667
// Function ID: 5668
// Name: toInteger
// Dependencies: [5668]

// Module 5667 (toInteger)
import toFinite from "toFinite" /* 5668 */;


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
