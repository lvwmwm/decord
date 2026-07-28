// Module ID: 4246
// Function ID: 36731
// Name: toInteger
// Dependencies: [4247]

// Module 4246 (toInteger)

export default function toInteger(arg0) {
  let num = 0;
  const tmp = require(4247) /* toFinite */(arg0);
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
