// Module ID: 4212
// Function ID: 36620
// Name: toInteger
// Dependencies: [4213]

// Module 4212 (toInteger)

export default function toInteger(arg0) {
  let num = 0;
  const tmp = require(4213) /* toFinite */(arg0);
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
