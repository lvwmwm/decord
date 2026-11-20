// Module ID: 5548
// Function ID: 5549
// Name: toInteger
// Dependencies: [5549]

// Module 5548 (toInteger)
import toFinite from "toFinite" /* 5549 */;


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
