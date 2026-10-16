// Module ID: 5188
// Function ID: 5189
// Name: toInteger
// Dependencies: [5189]

// Module 5188 (toInteger)
import toFinite from "toFinite" /* 5189 */;


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
