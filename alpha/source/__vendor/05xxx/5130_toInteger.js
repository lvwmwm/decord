// Module ID: 5130
// Function ID: 5131
// Name: toInteger
// Dependencies: [5131]

// Module 5130 (toInteger)
import toFinite from "toFinite" /* 5131 */;


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
