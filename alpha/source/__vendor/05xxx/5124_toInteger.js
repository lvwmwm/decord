// Module ID: 5124
// Function ID: 5125
// Name: toInteger
// Dependencies: [5125]

// Module 5124 (toInteger)
import toFinite from "toFinite" /* 5125 */;


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
