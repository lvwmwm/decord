// Module ID: 5126
// Function ID: 5127
// Name: toInteger
// Dependencies: [5127]

// Module 5126 (toInteger)
import toFinite from "toFinite" /* 5127 */;


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
