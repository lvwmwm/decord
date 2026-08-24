// Module ID: 4558
// Function ID: 4559
// Name: toInteger
// Dependencies: [4559]

// Module 4558 (toInteger)
import toFinite from "toFinite" /* 4559 */;


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
