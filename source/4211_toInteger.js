// Module ID: 4211
// Function ID: 36608
// Name: toInteger
// Dependencies: [4212]

// Module 4211 (toInteger)

export default function toInteger(arg0) {
  let num = 0;
  const tmp = require(4212) /* toFinite */(arg0);
  const result = tmp % 1;
  if (tmp == tmp) {
    let diff = tmp;
    if (result) {
      diff = tmp - result;
    }
    num = diff;
  }
  return num;
};
