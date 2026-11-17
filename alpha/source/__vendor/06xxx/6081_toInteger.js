// Module ID: 6081
// Function ID: 6082
// Name: toInteger
// Dependencies: [6082]

// Module 6081 (toInteger)
import toFinite from "toFinite" /* 6082 */;


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
