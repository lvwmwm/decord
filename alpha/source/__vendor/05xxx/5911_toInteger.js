// Module ID: 5911
// Function ID: 5912
// Name: toInteger
// Dependencies: [5912]

// Module 5911 (toInteger)
import toFinite from "toFinite" /* 5912 */;


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
