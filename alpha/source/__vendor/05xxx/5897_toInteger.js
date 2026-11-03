// Module ID: 5897
// Function ID: 5898
// Name: toInteger
// Dependencies: [5898]

// Module 5897 (toInteger)
import toFinite from "toFinite" /* 5898 */;


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
