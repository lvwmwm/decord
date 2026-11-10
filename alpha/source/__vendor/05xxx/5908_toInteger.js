// Module ID: 5908
// Function ID: 5909
// Name: toInteger
// Dependencies: [5909]

// Module 5908 (toInteger)
import toFinite from "toFinite" /* 5909 */;


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
