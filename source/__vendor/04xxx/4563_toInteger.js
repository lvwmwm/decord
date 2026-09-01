// Module ID: 4563
// Function ID: 4564
// Name: toInteger
// Dependencies: [4564]

// Module 4563 (toInteger)
import toFinite from "toFinite" /* 4564 */;


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
