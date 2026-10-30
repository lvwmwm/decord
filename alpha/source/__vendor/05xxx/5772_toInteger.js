// Module ID: 5772
// Function ID: 5773
// Name: toInteger
// Dependencies: [5773]

// Module 5772 (toInteger)
import toFinite from "toFinite" /* 5773 */;


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
