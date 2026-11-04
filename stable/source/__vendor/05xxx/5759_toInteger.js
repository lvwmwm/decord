// Module ID: 5759
// Function ID: 5760
// Name: toInteger
// Dependencies: [5760]

// Module 5759 (toInteger)
import toFinite from "toFinite" /* 5760 */;


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
