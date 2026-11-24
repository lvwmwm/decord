// Module ID: 5706
// Function ID: 5707
// Name: toInteger
// Dependencies: [5707]

// Module 5706 (toInteger)
import toFinite from "toFinite" /* 5707 */;


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
