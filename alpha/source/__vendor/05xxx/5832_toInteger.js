// Module ID: 5832
// Function ID: 5833
// Name: toInteger
// Dependencies: [5833]

// Module 5832 (toInteger)
import toFinite from "toFinite" /* 5833 */;


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
