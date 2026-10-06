// Module ID: 4871
// Function ID: 4872
// Name: toInteger
// Dependencies: [4872]

// Module 4871 (toInteger)
import toFinite from "toFinite" /* 4872 */;


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
