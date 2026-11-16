// Module ID: 5938
// Function ID: 5939
// Name: toInteger
// Dependencies: [5939]

// Module 5938 (toInteger)
import toFinite from "toFinite" /* 5939 */;


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
