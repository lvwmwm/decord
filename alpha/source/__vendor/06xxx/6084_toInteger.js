// Module ID: 6084
// Function ID: 6085
// Name: toInteger
// Dependencies: [6085]

// Module 6084 (toInteger)
import toFinite from "toFinite" /* 6085 */;


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
