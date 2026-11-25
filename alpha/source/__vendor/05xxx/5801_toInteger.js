// Module ID: 5801
// Function ID: 5802
// Name: toInteger
// Dependencies: [5802]

// Module 5801 (toInteger)
import toFinite from "toFinite" /* 5802 */;


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
