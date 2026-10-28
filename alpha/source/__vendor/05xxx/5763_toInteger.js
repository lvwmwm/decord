// Module ID: 5763
// Function ID: 5764
// Name: toInteger
// Dependencies: [5764]

// Module 5763 (toInteger)
import toFinite from "toFinite" /* 5764 */;


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
