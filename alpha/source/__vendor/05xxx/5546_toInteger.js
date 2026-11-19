// Module ID: 5546
// Function ID: 5547
// Name: toInteger
// Dependencies: [5547]

// Module 5546 (toInteger)
import toFinite from "toFinite" /* 5547 */;


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
