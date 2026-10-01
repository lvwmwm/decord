// Module ID: 4870
// Function ID: 4871
// Name: toInteger
// Dependencies: [4871]

// Module 4870 (toInteger)
import toFinite from "toFinite" /* 4871 */;


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
