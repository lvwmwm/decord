// Module ID: 5185
// Function ID: 5186
// Name: toInteger
// Dependencies: [5186]

// Module 5185 (toInteger)
import toFinite from "toFinite" /* 5186 */;


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
