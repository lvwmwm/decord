// Module ID: 4531
// Function ID: 4532
// Name: toInteger
// Dependencies: [4532]

// Module 4531 (toInteger)
import toFinite from "toFinite" /* 4532 */;


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
