// Module ID: 5709
// Function ID: 5710
// Name: toInteger
// Dependencies: [5710]

// Module 5709 (toInteger)
import toFinite from "toFinite" /* 5710 */;


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
