// Module ID: 5727
// Function ID: 5728
// Name: toInteger
// Dependencies: [5728]

// Module 5727 (toInteger)
import toFinite from "toFinite" /* 5728 */;


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
