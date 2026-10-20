// Module ID: 5689
// Function ID: 5690
// Name: toInteger
// Dependencies: [5690]

// Module 5689 (toInteger)
import toFinite from "toFinite" /* 5690 */;


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
