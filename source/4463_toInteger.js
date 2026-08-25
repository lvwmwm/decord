// Module ID: 4463
// Function ID: 4464
// Name: toInteger
// Dependencies: [4464]

// Module 4463 (toInteger)
import toFinite from "toFinite" /* 4464 */;


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
