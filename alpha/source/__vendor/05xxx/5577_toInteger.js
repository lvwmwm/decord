// Module ID: 5577
// Function ID: 5578
// Name: toInteger
// Dependencies: [5578]

// Module 5577 (toInteger)
import toFinite from "toFinite" /* 5578 */;


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
