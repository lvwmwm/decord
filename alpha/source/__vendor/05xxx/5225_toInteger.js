// Module ID: 5225
// Function ID: 5226
// Name: toInteger
// Dependencies: [5226]

// Module 5225 (toInteger)
import toFinite from "toFinite" /* 5226 */;


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
