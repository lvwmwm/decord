// Module ID: 6074
// Function ID: 6075
// Name: toInteger
// Dependencies: [6075]

// Module 6074 (toInteger)
import toFinite from "toFinite" /* 6075 */;


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
