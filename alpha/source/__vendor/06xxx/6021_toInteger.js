// Module ID: 6021
// Function ID: 6022
// Name: toInteger
// Dependencies: [6022]

// Module 6021 (toInteger)
import toFinite from "toFinite" /* 6022 */;


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
