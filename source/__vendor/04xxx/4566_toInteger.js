// Module ID: 4566
// Function ID: 4567
// Name: toInteger
// Dependencies: [4567]

// Module 4566 (toInteger)
import toFinite from "toFinite" /* 4567 */;


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
