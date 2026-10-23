// Module ID: 5725
// Function ID: 5726
// Name: toInteger
// Dependencies: [5726]

// Module 5725 (toInteger)
import toFinite from "toFinite" /* 5726 */;


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
