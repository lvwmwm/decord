// Module ID: 5187
// Function ID: 5188
// Name: toInteger
// Dependencies: [5188]

// Module 5187 (toInteger)
import toFinite from "toFinite" /* 5188 */;


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
