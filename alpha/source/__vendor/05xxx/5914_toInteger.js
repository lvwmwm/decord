// Module ID: 5914
// Function ID: 5915
// Name: toInteger
// Dependencies: [5915]

// Module 5914 (toInteger)
import toFinite from "toFinite" /* 5915 */;


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
