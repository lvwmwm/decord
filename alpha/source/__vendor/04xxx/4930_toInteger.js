// Module ID: 4930
// Function ID: 4931
// Name: toInteger
// Dependencies: [4931]

// Module 4930 (toInteger)
import toFinite from "toFinite" /* 4931 */;


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
