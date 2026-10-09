// Module ID: 5125
// Function ID: 5126
// Name: toInteger
// Dependencies: [5126]

// Module 5125 (toInteger)
import toFinite from "toFinite" /* 5126 */;


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
