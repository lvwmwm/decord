// Module ID: 5906
// Function ID: 5907
// Name: toInteger
// Dependencies: [5907]

// Module 5906 (toInteger)
import toFinite from "toFinite" /* 5907 */;


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
